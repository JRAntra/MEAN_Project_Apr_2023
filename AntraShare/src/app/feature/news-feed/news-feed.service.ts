import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Story, Comment } from 'src/app/shared/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedService {
  newsFeedCache: Story[] = [];
  constructor(private http: HttpClient) {}

  _fetchNewsFeed() {
    return new Observable<Story[]>((subscriber) => {
      this.http
        .get<Story[]>(`${environment.apiUrl}/api/news`)
        .pipe(catchError(this.handleError))
        .subscribe((data: Story[]) => {
          this.newsFeedCache = data;
          this.newsFeedCache.reverse(); // Latest story first
          subscriber.next(data);
        });
    });
  }

  getNewsFeed() {
    if (this.newsFeedCache.length === 0) {
      return this._fetchNewsFeed();
    } else {
      return new Observable<Story[]>((subscriber) => {
        subscriber.next(this.newsFeedCache);
      });
    }
  }

  postStory(story: Story) {
    return new Observable<Story>((subscriber) => {
      this.http
        .post<Story>(`${environment.apiUrl}/api/news`, story)
        .pipe(catchError(this.handleError))
        .subscribe((data: Story) => {
          this.newsFeedCache.unshift(data);
          subscriber.next(data);
        });
    });
  }

  postComment(storyId: string, comment: Comment) {
    return new Observable<Comment>((subscriber) => {
      this.http
        .patch<Comment>(
          `${environment.apiUrl}/api/news/addComment/${storyId}`,
          comment
        )
        .pipe(catchError(this.handleError))
        .subscribe((data: Comment) => {
          const story = this.newsFeedCache.find(
            (story) => story._id === storyId
          );
          if (story) {
            story.comment.unshift(data);
            subscriber.next(data);
          }
        });
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

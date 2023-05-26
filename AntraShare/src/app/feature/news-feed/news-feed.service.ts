import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Story } from 'src/app/shared/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedService {
  news_feed_cache: Story[] = [];
  constructor(private http: HttpClient) {}

  _fetchNewsFeed() {
    return new Observable<Story[]>((subscriber) => {
      this.http
        .get<Story[]>(`${environment.apiUrl}/api/news`)
        .pipe(catchError(this.handleError))
        .subscribe((data: Story[]) => {
          this.news_feed_cache = data;
          subscriber.next(data);
        });
    });
  }

  getNewsFeed() {
    if (this.news_feed_cache.length === 0) {
      return this._fetchNewsFeed();
    } else {
      return new Observable<Story[]>((subscriber) => {
        subscriber.next(this.news_feed_cache);
      });
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

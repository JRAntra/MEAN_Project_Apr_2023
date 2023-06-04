import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import imageCompression from 'browser-image-compression';
import {
  BehaviorSubject,
  Observable,
  catchError,
  of,
  share,
  throwError,
} from 'rxjs';
import { Comment, Story } from 'src/app/shared/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedService {
  private newsFeed$ = new BehaviorSubject<Story[]>([]);
  private likedList$ = new BehaviorSubject<{ [id: string]: Story }>({});

  constructor(private http: HttpClient) {
    const storage = localStorage.getItem('AntraShareLikedList');
    if (storage) {
      const storagesLikedList: { [id: string]: Story } = JSON.parse(storage);
      this.likedList$.next(storagesLikedList);
    }
  }

  fetchNewsFeed() {
    this.http
      .get<Story[]>(`${environment.apiUrl}/api/news`)
      .pipe(catchError(this.handleError))
      .subscribe((data) => this.newsFeed$.next(data));
  }

  getNewsFeed() {
    // fetch news feed if not fetched yet
    if (!this.newsFeed$.getValue().length) {
      this.fetchNewsFeed();
    }
    return this.newsFeed$.asObservable();
  }

  postStory(story: Story) {
    const multicast = this.http
      .post<Story>(`${environment.apiUrl}/api/news`, story)
      .pipe(catchError(this.handleError), share());
    multicast.subscribe((data: Story) => {
      this.newsFeed$.next([...this.newsFeed$.getValue(), data]);
    });
    return multicast;
  }

  postComment(storyId: string, comment: Comment) {
    const multicast = this.http
      .patch<Comment>(
        `${environment.apiUrl}/api/news/addComment/${storyId}`,
        comment
      )
      .pipe(catchError(this.handleError), share());
    multicast.subscribe((data: Comment) => {
      const newsFeed = this.newsFeed$.getValue();
      const story = newsFeed.find((story) => story._id === storyId);
      if (story) {
        story.comment?.push(data);
        this.newsFeed$.next(newsFeed);
      }
    });
    return multicast;
  }

  getLikedList() {
    return this.likedList$.asObservable();
  }

  isLiked(storyId: string) {
    return this.likedList$.getValue()[storyId] !== undefined;
  }

  setLike(story: Story) {
    const likedList = this.likedList$.getValue();
    likedList[story._id!] = story;
    this.likedList$.next(likedList);
    localStorage.setItem('AntraShareLikedList', JSON.stringify(likedList));
    return of(null);
  }

  removeLike(storyId: string) {
    const likedList = this.likedList$.getValue();
    delete likedList[storyId];
    this.likedList$.next(likedList);
    localStorage.setItem('AntraShareLikedList', JSON.stringify(likedList));
    return of(null);
  }

  uploadImage(file: File): Observable<string> {
    // mock upload image
    // reduce image size and convert to base64 string
    return new Observable<string>((subscriber) => {
      imageCompression(file, { maxSizeMB: 0.005, maxWidthOrHeight: 800 }).then(
        (compressedFile) => {
          // convert file to base64 string
          const reader = new FileReader();
          reader.readAsDataURL(compressedFile);
          reader.onload = () => {
            subscriber.next(reader.result as string);
            subscriber.complete();
          };
        }
      );
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

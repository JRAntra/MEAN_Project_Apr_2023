import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeListService {
  private likedPostsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public likedPosts$: Observable<string[]> = this.likedPostsSubject.asObservable();

  addPostToLikedPosts(post: string): void {
    const currentLikedPosts = this.likedPostsSubject.getValue();
    const updatedLikedPosts = [...currentLikedPosts, post];
    this.likedPostsSubject.next(updatedLikedPosts);
  }

  getLikedPosts(): Observable<string[]> {
    return this.likedPosts$;
  }
}

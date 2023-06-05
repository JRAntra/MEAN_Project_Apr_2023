import { Injectable, OnInit, OnDestroy } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject, tap, of } from 'rxjs'
import { Story } from 'src/app/shared/userInfo.model'


@Injectable({
  providedIn: 'root'
})
export class NewsFeedService implements OnInit, OnDestroy{
  private apiUrl = 'http://localhost:4231/api/news'

  private likedList$ = new BehaviorSubject<{ [id: string]: Story }>({});
  private newsFeed$ = new BehaviorSubject<Story[]>([]);


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const storage = localStorage.getItem('LikedList');
    if (storage) {
      const storagesLikedList: { [id: string]: Story } = JSON.parse(storage);
      this.likedList$.next(storagesLikedList);
    }else{
      this.likedList$.next({});
    }
  }

  ngOnDestroy(): void {
    this.likedList$.next({});
    localStorage.removeItem('LikedList');
  }

  getLikedList() {
    return this.likedList$.asObservable();
  }

  getNewsFeed(): Observable<Story[]> {
    if (this.newsFeed$.getValue().length === 0) {
      return this.http.get<Story[]>(this.apiUrl).pipe(
        tap((data) => this.newsFeed$.next(data))
      )
    }else{
      return this.newsFeed$.asObservable();
    }
  }

  toggleLike(story: Story) {
    const likedList = this.likedList$.getValue();
    if (likedList[story._id!]) {
      likedList[story._id!].liked = false;
      delete likedList[story._id!];
    } else {
      likedList[story._id!] = story;
      likedList[story._id!].liked = true;
    }
    this.likedList$.next(likedList);
    localStorage.setItem('LikedList', JSON.stringify(likedList));
    // for (let key in likedList) {
    //   console.log("key", key)
    //   console.log("value", likedList[key])
    // }
    return of(null);
  }

}

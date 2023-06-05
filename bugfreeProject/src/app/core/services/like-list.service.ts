import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewsFeedService,NewsItem } from '../../core/services/news-feed.service';

@Injectable({
  providedIn: 'root'
})

export class LikeListService {
  private storageKey = 'likeList';
  private _likedNews = new BehaviorSubject<NewsItem[]>([]);

  likedNews$ = this._likedNews.asObservable();
  /*
  constructor() {
    const storedLikes = JSON.parse(localStorage.getItem('likedNews') || '[]');
    this._likedNews.next(storedLikes);
  }

  addToLikeList(item: NewsItem) {
    let likeList = this.getLikeList();
    likeList.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(likeList));
  }

  removeFromLikeList(item: NewsItem) {
    let likeList = this.getLikeList();
    likeList = likeList.filter(i => i.id !== item.id);
    localStorage.setItem(this.storageKey, JSON.stringify(likeList));
  }

  getLikeList(): NewsItem[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }*/
  addToLikeList(item: NewsItem) {
    let likeList = this.getLikeList();
    likeList.push(item);
    this._likedNews.next(likeList);
  }

  removeFromLikeList(item: NewsItem) {
    let likeList = this.getLikeList();
    likeList = likeList.filter(i => i.id !== item.id);
    this._likedNews.next(likeList);
  }

  getLikeList(): NewsItem[] {
    return this._likedNews.getValue();
  }
}

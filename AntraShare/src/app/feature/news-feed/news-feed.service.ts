import { Injectable, OnInit } from '@angular/core';
import { Story, Comment } from 'src/app/shared/types';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedService implements OnInit {
  news_feed_cache: Story[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    //TODO
  }

  _fetchNewsFeed() {
    // TODO: error handling
    return new Observable<Story[]>((subscriber) => {
      this.http
        .get<Story[]>(`${environment.apiUrl}/api/news`)
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
}

import { Injectable, OnInit } from '@angular/core';
import { Story, Comment } from 'src/app/shared/types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedService implements OnInit {
  news_feed: Story[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.news_feed = Array<Story>(3).fill({
      publisherName: 'test-user',
      publishedTime: new Date().toString(),
      content: {
        text: 'test-content',
        image: '',
        video: '',
      },
      comments: Array(7).fill({
        publisherName: 'test-user',
        publishedTime: new Date().toString(),
        content: {
          text: 'test-content',
          image: '',
          video: '',
        },
      }),
    });
  }
}

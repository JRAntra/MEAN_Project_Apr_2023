import { Component } from '@angular/core';
import { Story } from 'src/app/shared/types';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass'],
})
export class NewsFeedComponent {
  storyList: Story[];
  constructor() {
    this.storyList = Array<Story>(3).fill({
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

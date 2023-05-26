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
      // id: 0,
      publisherName: 'string',
      publishedTime: Date.now().toString(),
      content: {
        image: 'string',
        video: 'string',
        text: 'string',
      },
      comments: [],
    });
  }
}

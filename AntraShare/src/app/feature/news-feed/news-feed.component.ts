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
      id: 0,
      poster: {
        name: 'test-user',
        avatar: null,
        id: 0,
        email: 'test-email',
      },
      content: 'test-story-content',
      post_time: 0,
    });    
  }
}

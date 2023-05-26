import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/shared/types';
import { NewsFeedService } from '../news-feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass'],
})
export class NewsFeedComponent implements OnInit {
  storyList: Story[];
  constructor(private newsFeedService: NewsFeedService) {
    this.storyList = [];
  }

  ngOnInit() {
    this.newsFeedService.getNewsFeed().subscribe((data) => {
      this.storyList = data;
    });
  }
}

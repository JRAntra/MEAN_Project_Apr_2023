import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../news-feed.service';

interface News {
  avatar: string;
  publisherName: string;
  content: {
    imageUrl?: string;
    videoUrl?: string;
    textUrl?: string;
  };
  comments: Comment[];
  likedIdList: {
    userId: string;
  }[];
}

interface Comment {
  avatar: string;
  publisherName: string;
  content: {
    imageUrl?: string;
    videoUrl?: string;
    textUrl?: string;
  };
}

@Component({
  selector: 'app-news-feed-page',
  templateUrl: './news-feed-page.component.html',
  styleUrls: ['./news-feed-page.component.sass']
})
export class NewsFeedPageComponent implements OnInit {
  newsFeed: News[] = [];

  constructor(private newsFeedService: NewsFeedService) { }

  ngOnInit() {
    this.newsFeed = this.newsFeedService.getNewsFeed();
  }
}

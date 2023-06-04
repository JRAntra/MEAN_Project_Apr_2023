import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/shared/types';
import { NewsFeedService } from '../news-feed.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass'],
})
export class NewsFeedComponent implements OnInit {
  storyList$?: Observable<Story[]>;
  likedList$?: Observable<{ [id: string]: Story }>;
  likedListSidebarVisible = false;

  constructor(private newsFeedService: NewsFeedService) {}

  ngOnInit() {
    this.storyList$ = this.newsFeedService.getNewsFeed();
    this.likedList$ = this.newsFeedService.getLikedList();
  }

  toggleLikedListSidebar() {
    this.likedListSidebarVisible = !this.likedListSidebarVisible;
  }
}

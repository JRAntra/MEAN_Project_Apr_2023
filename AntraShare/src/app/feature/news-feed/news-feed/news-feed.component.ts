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
  storyList$: Observable<Story[]> | null = null;
  likedListSidebarVisible = false;

  constructor(private newsFeedService: NewsFeedService) {}

  ngOnInit() {
    this.storyList$ = this.newsFeedService.getNewsFeed();
  }

  toggleLikedListSidebar() {
    this.likedListSidebarVisible = !this.likedListSidebarVisible;
  }
}

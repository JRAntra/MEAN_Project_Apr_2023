import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/shared/types';
import { NewsFeedService } from '../news-feed.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass'],
})
export class NewsFeedComponent implements OnInit {
  storyList: Story[];
  likedListSidebarVisible = false;

  constructor(private newsFeedService: NewsFeedService) {
    this.storyList = [];
  }

  ngOnInit() {
    this.newsFeedService
      .getNewsFeed()
      .pipe(
        catchError((err) => {
          alert(err);
          return [];
        })
      )
      .subscribe((data) => {
        this.storyList = data;
      });
  }

  toggleLikedList() {
    this.likedListSidebarVisible = !this.likedListSidebarVisible;
  }
}

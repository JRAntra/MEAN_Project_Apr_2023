import { Component,OnInit } from '@angular/core';
import { LikeListService } from 'src/app/core/services/like-list.service';
import { NewsFeedService,NewsItem } from '../../core/services/news-feed.service';


@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.scss']
})
export class LikeListComponent implements OnInit {
  likedNews: NewsItem[] = [];

  constructor(private likeListService: LikeListService,private newsFeedService: NewsFeedService) { }

  ngOnInit(): void {
    this.likeListService.likedNews$.subscribe(likedNews => {
      this.likedNews = likedNews;
    });
  }
}
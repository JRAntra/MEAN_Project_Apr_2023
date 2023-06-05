import { Component , OnInit} from '@angular/core';
import { NewsFeedService,NewsItem } from '../../core/services/news-feed.service';
import { MatDialog } from '@angular/material/dialog';
import { LikeListComponent } from '../like-list/like-list.component';
import { LikeListService } from 'src/app/core/services/like-list.service';



@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.scss']
})

export class AfterLoginComponent implements OnInit {
  searchText = '';
  //newsItem: NewsItem | undefined;
  //newsFeedData: any[] = [];
  newsFeed: NewsItem[] = [];
  likeList: NewsItem[] = [];
  class="like-list-button"
  constructor(private newsFeedService: NewsFeedService,private likeListService: LikeListService) {}
  
  ngOnInit(): void {
    this.newsFeedService.getNewsFeed().subscribe(data => {
      this.newsFeed = data;
      console.log(this.newsFeed);
    });
    
    this.likeListService.likedNews$.subscribe(
      (likedNews: NewsItem[]) => {
        this.likeList = likedNews;
      }
    );
    
  }
  
  /*openLikeList(): void {
    this.dialog.open(LikeListComponent, {
      width: '600px', // Customize the width and height
      height: '400px',
      data: {}, // Any data you want to pass to the modal
    });
  }*/
  onSearch(){
    console.log('Searching for:', this.searchText);
  }
  showLikeList = false;

  toggleLikeList() {
    this.showLikeList = !this.showLikeList;
  }


}

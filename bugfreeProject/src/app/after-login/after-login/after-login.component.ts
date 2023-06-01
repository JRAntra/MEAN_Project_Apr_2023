import { Component , OnInit} from '@angular/core';
import { NewsFeedService,NewsItem } from '../../core/services/news-feed.service';

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
  constructor(private newsFeedService: NewsFeedService) {}
  
  ngOnInit(): void {
    this.newsFeedService.getNewsFeed().subscribe(data => {
      this.newsFeed = data;
      console.log(this.newsFeed);
    });
  }
  onSearch(){
    console.log('Searching for:', this.searchText);
  }


}

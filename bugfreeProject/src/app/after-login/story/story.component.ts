import { Component,OnInit } from '@angular/core';
import { NewsFeedService,NewsItem  } from 'src/app/core/services/news-feed.service';
import { LikeListService } from 'src/app/core/services/like-list.service';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit{
  searchText = '';
  //newsItem: NewsItem | undefined;
  //newsFeedData: any[] = [];
  newsFeed: NewsItem[] = [];
  constructor(private newsFeedService: NewsFeedService, private likeListService: LikeListService) {}

  
  ngOnInit(): void {
    this.newsFeedService.getNewsFeed().subscribe(data => {
      this.newsFeed = data;
      console.log(this.newsFeed);
    });
  }
  onNewsClick(news: NewsItem) {
    // Here you handle the click event, for example, navigate to a news details page
    console.log(news);
  }


  likeItem(item: NewsItem) {
    this.likeListService.addToLikeList(item);
  }

  unlikeItem(item: NewsItem) {
    this.likeListService.removeFromLikeList(item);
  }

  isLiked(item: NewsItem) {
    const likeList = this.likeListService.getLikeList();
    return likeList.some(i => i.id === item.id);
  }
  
  hasImage(news: NewsItem): boolean {
    return news.content && news.content.image !== undefined && news.content.image !== 'http://via.placeholder.com/640x360';
  }
  
  

}

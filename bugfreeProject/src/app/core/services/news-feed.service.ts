import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';


export interface Comment {
  publisherName: string;
  content: {
    image: string;
    video: string;
    text: string;
    _id: string;
  };
  _id: string;
  publishedTime: string;
}

export interface NewsItem {
  id: string;
  publisherName: string;
  content: {
    image: string;
    video: string;
    text: string;
    _id: string;
  };
  publishedTime: string;
  comment: Comment[];
}

@Injectable({
  providedIn: 'root'
})

//private apiUrl = 'http://localhost:4231/api/news'; 
export class NewsFeedService {
  constructor(private http: HttpClient) { }

  getNewsFeed(): Observable<NewsItem[]> {
    return this.http.get<any[]>('http://localhost:4231/api/news')
      .pipe(
        map(data => data.map(item => ({
          id: item._id,
          publisherName: item.publisherName,
          content: item.content,
          publishedTime: item.publishedTime,
          //{ publisherName: any; content: any; _id: any; publishedTime: any; }
          comment: item.comment.map((c: Comment) => ({
            publisherName: c.publisherName,
            content: c.content,
            _id: c._id,
            publishedTime: c.publishedTime,
          }))
        })))
      );
  }
}
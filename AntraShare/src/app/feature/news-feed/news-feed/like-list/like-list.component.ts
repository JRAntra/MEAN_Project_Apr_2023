import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LikeListService } from './like-list.service';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.sass'],
})
export class LikeListComponent implements OnInit {
  sidebarVisible = false;
  post = 'Lorem ipsum dolor sit amet fghdjkfhjkdghgfg';
  likedPosts: string[] = [];

  likedNews: { userID: string; body: string; comments: number; likes: number; date: string | null; }[] = [];

  constructor(private datePipe: DatePipe, private likeListService: LikeListService) {
    this.generateFakeData();
  }

  onLikeClick(): void {
    this.likeListService.addPostToLikedPosts(this.post);
  }

  ngOnInit(): void {
    this.likeListService.getLikedPosts().subscribe((likedPosts: string[]) => {
      this.likedPosts = likedPosts;
    });
  }

  generateFakeData(): void {
    // Generate fake data for the likedNews array
    for (let i = 1; i <= 10; i++) {
      const currentDate = new Date();
      const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss');

      this.likedNews.push({
        userID: `User ${i}`,
        body: `This is the body of liked item ${i}`,
        comments: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 10000),
        date: formattedDate, // Add the formatted date to the object
      });
    }
  }
}

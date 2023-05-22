import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-after-user-login',
  templateUrl: './after-user-login.component.html',
  styleUrls: ['./after-user-login.component.scss']
})
export class AfterUserLoginComponent implements OnInit {
  postContent = '';
  stories = [];
  likes = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitPost(): void {
    // You would send the post content to your server here.
    console.log(this.postContent);
    this.postContent = ''; // Clear the post content.
  }

  fetchStories(): void {
    // You would fetch the stories from your server here.
    console.log('Fetching stories...');
  }

  fetchLikes(): void {
    // You would fetch the likes from your server here.
    console.log('Fetching likes...');
  }
}

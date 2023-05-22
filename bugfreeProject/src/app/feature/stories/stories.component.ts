import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  story = null;  // Story data would come from your server.

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchStory();  // Fetch the story when the component is initialized.
  }

  fetchStory(): void {
    // Replace with your actual API endpoint.
    this.http.get('https://your-api-endpoint/story').subscribe(response => {
      this.story = response;
    });
  }

  commentOnStory(): void {
    // Implement your logic for commenting on the story.
    console.log('Commenting on story...');
  }

  likeStory(): void {
    // Implement your logic for liking the story.
    console.log('Liking story...');
  }
}

import { Component, OnInit } from '@angular/core'
import { NewsFeedService } from '../news-feed.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Post {
  imageUrl: string
  title: string
  body: string
  reactions: number
  userId: number
  id: number
}

@Component({
  selector: 'app-news-feed-page',
  templateUrl: './news-feed-page.component.html',
  styleUrls: ['./news-feed-page.component.sass']
})

export class NewsFeedPageComponent implements OnInit {
  news: any[] = []
  postForm!: FormGroup
  inputValue?: string

  constructor(private newsFeedService: NewsFeedService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getNews()

    // Initialize the postForm
    this.postForm = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(200)]]
    })

  }

  submitPostForm(): void {
    if (this.postForm.invalid) {
      return
    }

    // Process and submit the post form data
    const postData = this.postForm.value
    // Perform your logic here (e.g., send the data to an API)

    // Reset the form after submission
    this.postForm.reset()
  }

  getNews(): void {
    this.newsFeedService.getNewsFeed()
      .subscribe((response: any) => {
        const newsFeedArray = response.posts;
        this.news = newsFeedArray.map((post: Post) => ({
          imageUrl: post.imageUrl,
          title: post.title,
          body: post.body,
          likes: post.reactions,
          userID: post.userId,
          id: post.id,
        }));
        console.log(this.news)
      });
  }
}

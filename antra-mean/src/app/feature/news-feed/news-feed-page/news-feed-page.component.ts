import { Component, OnInit } from '@angular/core'
import { NewsFeedService } from '../news-feed.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

export interface Post {
  image: string
  video: string
  text: string
  publisherName: string
  publishedTime: string
  content: object
  comment: object
  likedIdList: any
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

  constructor(private datePipe: DatePipe, private newsFeedService: NewsFeedService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getNews()

    // Initialize the postForm
    this.postForm = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(400)]]
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
        const newsFeedArray = response;
        console.log(newsFeedArray)
        this.news = newsFeedArray.map((post: Post) => ({
          content: post.content,
          comments: post.comment,
          likes: post.likedIdList,
          publisherName: post.publisherName,
          // publishedTime: this.datePipe.transform(post.publishedTime),
          publishedTime: post.publishedTime
        }))
        console.log(this.news)
      })
  }
}

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NewsFeedService } from '../../../news-feed.service';
import { AuthService } from 'src/app/auth.service';
import { Content } from 'src/app/shared/types';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.sass'],
})
export class NewStoryComponent {
  content: Content = {};
  buttonLoading = false;

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private storyService: NewsFeedService
  ) {}

  postStory() {
    if (!this.content.text) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please enter your story',
      });
      return;
    }
    this.buttonLoading = true;

    const postUser = this.authService.getUser();
    this.storyService
      .postStory({
        publisherName: postUser?.name ?? 'guest',
        publishedTime: new Date().toISOString(),
        content: this.content,
        comment: [],
      })
      .subscribe(() => {
        this.buttonLoading = false;
        this.content = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Your story has been posted',
        });
      });
  }
}

import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NewsFeedService } from '../../../news-feed.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-new-comment[storyId]',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.sass'],
})
export class NewCommentComponent {
  text = '';
  buttonLoading = false;
  @Input() storyId!: string;

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private storyService: NewsFeedService
  ) {}

  postComment() {
    if (!this.text) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please enter your comment',
      });
      return;
    }
    this.buttonLoading = true;

    const postUser = this.authService.getUser();
    this.storyService
      .postComment(this.storyId, {
        publisherName: postUser?.name ?? 'guest',
        publishedTime: new Date().toISOString(),
        content: {
          text: this.text,
        },
      })
      .subscribe(() => {
        this.buttonLoading = false;
        this.text = '';
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Your comment has been posted',
        });
      });
  }
}

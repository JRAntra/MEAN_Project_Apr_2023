import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Story } from 'src/app/shared/types';
import { NewsFeedService } from '../../news-feed.service';

@Component({
  selector: 'app-story[story]',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass'],
})
export class StoryComponent {
  @Input() story!: Story;
  showComment = false;
  liked = false;

  constructor(
    private newsFeedService: NewsFeedService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.liked = this.newsFeedService.isLiked(this.story._id!);
  }

  toggleCommentPanel() {
    this.showComment = !this.showComment;
  }

  setLike() {
    this.liked = true;
    this.newsFeedService.setLike(this.story).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'You liked this post',
      });
    });
  }

  resetLike() {
    this.liked = false;
    if (!this.story._id) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'story._id is undefined',
      });
      console.error('story._id is undefined');
      return;
    }
    this.newsFeedService.removeLike(this.story._id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'You unliked this post',
      });
    });
  }
}

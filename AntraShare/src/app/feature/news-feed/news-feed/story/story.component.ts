import { Component, Input } from '@angular/core';
import { Story } from 'src/app/shared/types';

@Component({
  selector: 'app-story[story]',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass'],
})
export class StoryComponent {
  @Input() story!: Story;
  showComment = false;
  liked = false;

  toggleCommentPanel() {
    this.showComment = !this.showComment;
  }

  setLike() {
    this.liked = true;
    // TODO: call API to set like
  }

  resetLike() {
    this.liked = false;
    // TODO: call API to reset like
  }
}

import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/shared/types';

@Component({
  selector: 'app-comment-list[commentList][storyId]',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.sass'],
})
export class CommentListComponent {
  @Input() commentList: Comment[] = [];
  @Input() storyId!: string;
}

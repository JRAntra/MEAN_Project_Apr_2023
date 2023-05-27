import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/shared/types';

@Component({
  selector: 'app-comment[comment]',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass'],
})
export class CommentComponent {
  @Input() comment!: Comment;
}

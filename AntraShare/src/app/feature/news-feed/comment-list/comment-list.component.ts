import { Component } from '@angular/core';
import { Comment } from 'src/app/shared/types';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.sass'],
})
export class CommentListComponent {
  commentList: Comment[];
  constructor() {
    // test data
    this.commentList = Array(7).fill({
      poster: {
        name: 'test-user',
        avatar: null,
      },
      content: 'test-content',
    });
  }
}

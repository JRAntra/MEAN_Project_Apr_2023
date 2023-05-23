import { Component } from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.sass'],
})
export class NewCommentComponent {
  text: string;
  constructor() {
    this.text = '';
  }
}

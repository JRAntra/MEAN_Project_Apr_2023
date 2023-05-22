import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/shared/types';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass'],
})
export class StoryComponent implements OnInit {
  @Input() story!: Story;
  timeDisplay = '';
  showComment = false;
  liked = false;
  ngOnInit() {
    // convert from unix timestamp to human readable time
    this.timeDisplay = new Date(this.story.post_time * 1000).toLocaleString();
  }
  toggleCommentPanel() {
    this.showComment = !this.showComment;
  }
  setLike() {
    this.liked=true;
    // TODO: call API to set like
  }
  resetLike() {
    this.liked=false;
    // TODO: call API to reset like
  }
}

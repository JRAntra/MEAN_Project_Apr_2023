import { Component } from '@angular/core';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.sass'],
})
export class NewStoryComponent {
  text: string;
  constructor() {
    this.text = '';
  }
}

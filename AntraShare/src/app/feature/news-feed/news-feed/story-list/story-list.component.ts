import { Component, Input } from '@angular/core';
import { Story } from 'src/app/shared/types';

@Component({
  selector: 'app-story-list[storyList]',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass'],
})
export class StoryListComponent {
  @Input() storyList!: Story[];
}

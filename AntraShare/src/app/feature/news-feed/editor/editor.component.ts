import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUploadHandlerEvent } from 'primeng/fileupload';
import { NewsFeedService } from '../news-feed.service';
import { Content } from 'src/app/shared/types';

@Component({
  selector: 'app-editor[content]',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass'],
})
export class EditorComponent {
  @Input() content!: Content;
  @Output() contentChange = new EventEmitter<Content>();

  constructor(private newsFeedService: NewsFeedService) {}

  onUploadClicked(event: FileUploadHandlerEvent) {
    this.newsFeedService.uploadImage(event.files[0]).subscribe((url) => {
      this.content.image = url;
      this.contentChange.emit(this.content);
    });
  }

  removeImage() {
    delete this.content.image;
    this.contentChange.emit(this.content);
  }
}

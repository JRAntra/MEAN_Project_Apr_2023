import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass'],
})
export class AlertComponent implements OnInit {
  constructor(private config: DynamicDialogConfig) {}

  @Input() error_message = '';

  ngOnInit() {
    this.error_message = this.config.data?.err_msg;
  }
}

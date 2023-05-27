import { Component } from '@angular/core';
import { Inplace } from 'primeng/inplace';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent {
  loading = false;
  genderOptions: string[];
  selectedGender = '';
  constructor() {
    this.genderOptions = ['Male', 'Female', 'Other'];
  }

  save(event: MouseEvent, ref: Inplace) {
    this.loading = true;
    setTimeout(() => {
      ref.deactivate(event);
      this.loading = false;
    }, 1000);
  }
}

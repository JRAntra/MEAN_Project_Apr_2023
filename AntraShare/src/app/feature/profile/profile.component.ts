import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent {
  genderOptions: string[];
  selectedGender: string = "";
  constructor() {
    this.genderOptions = ['Male', 'Female', 'Other'];
  }
}

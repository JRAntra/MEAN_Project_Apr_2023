import { Component } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  username?: string;
  email?: string;
  age?: number;
  gender?: string;
  password?: string;
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  showPosts() {
    // Implement the logic to show the user's posts
  }

  showLikedStories() {
    // Implement the logic to show the user's liked stories
  }

}

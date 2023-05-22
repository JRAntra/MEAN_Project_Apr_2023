import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // method to show the posts
  showPosts(): void {
    console.log("Showing posts...");
    // Add your logic here to fetch and display the posts
  }

  // method to show the likes
  showLikes(): void {
    console.log("Showing likes...");
    // Add your logic here to fetch and display the liked stories
  }

  // method to toggle the password visibility
  togglePassword(): void {
    let passwordField = document.getElementById('password');
    if (passwordField.getAttribute('type') === 'password') {
      passwordField.setAttribute('type', 'text');
    } else {
      passwordField.setAttribute('type', 'password');
    }
  }
}

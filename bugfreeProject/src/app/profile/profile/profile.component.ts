import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup;
  username?: string;
  email?: string;
  age?: number;
  gender?: string;
  password?: string;
  showPassword: boolean = false;
  constructor(private fb: FormBuilder) { 
    this.profileForm = this.fb.group({
      username: [''],
      email: [''],
      age: [''],
      gender: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.saveProfile();
    this.loadProfile();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  showPosts() {
    // Implement the logic to show the user's posts
  }

  showLikedStories() {
    // Implement the logic to show the user's liked stories
  }
  loadProfile() {
      const storedUserInfo = localStorage.getItem('userInfo');
      
      if(storedUserInfo) {
        const userInfo = JSON.parse(storedUserInfo);
        this.profileForm.patchValue(userInfo);
      }
  }
  saveProfile() {
    const userInfo = {
      username: 'bugfree@123.com',
      email: 'bugfree@123.com',
      age: 18,
      gender: 'helicopter',
      password: 'bugfree'
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    this.profileForm.patchValue(userInfo);
  }

}

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
  public userInfo: any = {};
  
  ngOnInit(): void {
    //this.saveProfile();
    this.loadData();
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

  loadData() {
    const data = localStorage.getItem('userInfo');
    if (data) {
      const userInfo = JSON.parse(data);
      this.profileForm.patchValue({
        username: userInfo.userName,
        email: userInfo.userEmail,
        age: userInfo.age,
        gender: userInfo.gender,
        password: "userInfo.password"
      });
    }
    password: "bugfree"
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

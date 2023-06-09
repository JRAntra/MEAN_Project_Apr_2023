import { Component, OnInit } from '@angular/core';
import { Inplace } from 'primeng/inplace'
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  // the ! post-fix expression tells TS that this variable will be assigned
    // before it's going to be used
  editing: boolean = false;
  isPasswordVisible: boolean = false;
  avatarUrl: string = 'https://i.pinimg.com/280x280_RS/55/96/4e/55964ebb02710d6b9ce1c26f1d857906.jpg'
  isAvatarChanged: boolean = false;
  genderOptions: any[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
  ];

  constructor(private authService: AuthService, private fb: FormBuilder,) {}

  ngOnInit() {
    this.initForm();
    this.isAvatarChanged = false

    const savedFormData = localStorage.getItem('profileForm');
    if(savedFormData) {
      const formData = JSON.parse(savedFormData);
      this.profileForm.setValue(formData);
    }

    const savedAvatarUrl = localStorage.getItem('avatarUrl');
    if (savedAvatarUrl) {
      this.avatarUrl = savedAvatarUrl;
    }

    // Listen for changes and save them
    this.profileForm.valueChanges.subscribe(values => {
      localStorage.setItem('profileForm', JSON.stringify(values));
    });
  }

  private initForm() {
    const user = this.authService.getUser();
    this.profileForm = this.fb.group({
      avatar: [{ value: this.avatarUrl, disabled: !this.editing }], // Use disabled property here
      userName: [user?.userName, Validators.required],
      userEmail: [user?.userEmail, [Validators.required, Validators.email]],
      age: [user?.age, [Validators.min(1)]],
      gender: [user?.gender],
      password: ['', Validators.required]
    });
    if (!this.editing){
      this.profileForm.disable();
    }
  }

  toggleEdit() {
    this.editing = !this.editing;
    if (this.editing) {
      this.profileForm.enable();
    } else {
      this.profileForm.disable();
    }
  }

  saveProfile() {
    const updatedProfile = this.profileForm.value;
    console.log(updatedProfile);
    this.toggleEdit();
    window.alert("Profile information saved successfully!")
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; // Toggle the visibility state
  }

  onFileChanged(event: Event) {
    this.isAvatarChanged = true;
    const file = (event.target as HTMLInputElement).files![0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarUrl = reader.result as string;
      }
      reader.readAsDataURL(file)
    }
  }

  saveAvatar(){
    localStorage.setItem('avatarUrl', this.avatarUrl);
    this.isAvatarChanged = false;
    window.alert("Your profile image has being saved successfully!")
  }
}

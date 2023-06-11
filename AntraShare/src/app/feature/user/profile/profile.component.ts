import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  providers: [DialogService],

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
  alertDialogRef!: DynamicDialogRef;
  error_message: any;

  constructor(private authService: AuthService, private dialogService: DialogService, private router: Router, private fb: FormBuilder,) {}

  ngOnInit() {
    const user = this.authService.getUser();
    console.log(user)
    if (!user) {
      // Redirect to login page if not authenticated
      this.router.navigate(['/login']);
      return;
    }

    this.initForm();
    this.isAvatarChanged = false;

    // Populate form with user data
    this.profileForm.patchValue({
      userName: user.userName,
      userEmail: user.userEmail,
      age: user.age,
      gender: user.gender
    });

    if (user.avatar) {
      this.avatarUrl = user.avatar;
    }

    // Optional: Retrieve unsaved changes from local storage
    const savedFormValues = localStorage.getItem(`profileForm_${user?.userEmail}`);
    if (savedFormValues) {
      this.profileForm.patchValue(JSON.parse(savedFormValues));
    }

    const savedAvatarURL = localStorage.getItem(`avatarURL_${user?.userEmail}`);
    if (savedAvatarURL) {
      this.avatarUrl = savedAvatarURL;
    }

    // Listen for changes and save them
    this.profileForm.valueChanges.subscribe(values => {
      localStorage.setItem(`profileForm_${user?.userEmail}`, JSON.stringify(values));
    });
  }



  private initForm() {
    const user = this.authService.getUser();
    this.profileForm = this.fb.group({
      avatar: [''],
      userName: [user?.userName, Validators.required],
      userEmail: [user?.userEmail, [Validators.required, Validators.email]],
      age: [user?.age, [Validators.min(1)]],
      gender: [user?.gender],
      password: ['', Validators.required]
    });

    this.editing = false;
    this.profileForm.disable();
  }

  toggleEdit() {
    this.editing = !this.editing;
    if (this.editing) {
      this.profileForm.enable();
    } else {
      this.profileForm.disable();
    }
  }

  alertMessage() {
    this.alertDialogRef = this.dialogService.open(AlertComponent, {
      data: {
        err_msg: this.error_message,
      },
      header: 'Alert',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  saveProfile() {
    const updatedProfile = this.profileForm.value;
    console.log(updatedProfile);
    this.toggleEdit();
    setTimeout(() => {
      this.error_message = "Your information has been successfully saved.";
      this.alertMessage();
    }, 1000)
  }


  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; // Toggle the visibility state
  }

  onFileChanged(event: Event) {
    this.isAvatarChanged = true;
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarUrl = reader.result as string;
      }
      reader.readAsDataURL(file)
    }
  }

  saveAvatar(){
    const user = this.authService.getUser()
    localStorage.setItem(`avatarURL_${user?.userEmail}`, this.avatarUrl);
    this.isAvatarChanged = false;
    setTimeout(()=> {
      this.error_message = "Your profile image has being saved successfully!";
      this.alertMessage();
    }, 1000)
  }
}

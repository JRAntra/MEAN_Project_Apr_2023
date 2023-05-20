import { Component } from '@angular/core';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  register: Register = {
    username: '',
    email: '',
    password: ''
  }
}

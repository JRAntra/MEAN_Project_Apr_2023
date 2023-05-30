import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  inputText: string = '';
  updateLongText(inputText: string) {
    this.inputText = inputText;
  }

}

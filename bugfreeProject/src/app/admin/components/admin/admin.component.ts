import { Component } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

    public chosenUser: User | null = null;
    getChosenUser(user: User) {
        this.chosenUser = user;
        console.log(user);
    }
}

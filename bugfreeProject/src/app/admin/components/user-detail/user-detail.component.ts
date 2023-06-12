import { Component, Input } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
    @Input() chosenUser: User | null = null;
}

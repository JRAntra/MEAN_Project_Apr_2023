import { Component } from '@angular/core';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.scss']
})
export class AfterLoginComponent {
  searchText = '';
  onSearch(){
    console.log('Searching for:', this.searchText);
  }

}

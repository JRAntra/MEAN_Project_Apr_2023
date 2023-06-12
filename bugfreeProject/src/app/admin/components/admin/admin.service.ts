import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  isAuth(){
    const data = JSON.parse(localStorage.getItem('userInfo')!);
    if(data.userRole === 'admin'){
      return true;
    }else{
      return false;
    }
  }
}

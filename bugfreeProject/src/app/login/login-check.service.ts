import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckService {
  baseUrl: string = 'http://localhost:4231/api/login/';
  
  constructor(private http: HttpClient) { }


  // getQuotes(): Observable<any>{
  //   return this.http.get('http://localhost:4231/api/news');
  // }

  

  login(user: any) {
    const body = {
      userEmail: user.userEmail,
      password: user.password,
    };
    return this.http.post('http://localhost:4231/api/login/', body, { observe: 'response' });
  }

  // register() {
  //   const body = {
  //     name: "req.body.name",
  //       userName: "bugfree",
  //       userEmail: "bugfree@123.com",
  //       password: "bugfree",
  //       userRole: 'user',
  //       age: 12,
  //       gender: "req.body.gender",
  //       phone: 1234567890,
  //   };
  //   return this.http.post('http://localhost:4231/api/register/createNewAccount/', body, { observe: 'response' });
  // }
}
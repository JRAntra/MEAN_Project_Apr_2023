import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
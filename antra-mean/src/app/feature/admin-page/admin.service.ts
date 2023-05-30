import { UserInfo } from 'src/app/shared/types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:4231/api/users/getAllUsers'

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map((response) => {
          console.log(response)
          return (<UserInfo[]>response);
        }),
      );
  }
}
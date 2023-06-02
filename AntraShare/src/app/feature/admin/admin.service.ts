import { UserProfile } from 'src/app/shared/types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http
      .get<UserProfile[]>(`${environment.apiUrl}/api/users/getAllUsers`, {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          return <UserProfile[]>response.body;
        })
      );
  }
}

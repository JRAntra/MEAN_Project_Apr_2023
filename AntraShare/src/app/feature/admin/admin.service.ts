import { UserProfile } from 'src/app/shared/types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  isAdmin = false;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.changeState();
  }

  private changeState() {
    const user = this.authService.getUser();
    console.log(user);
    if (user && user.userRole === 'admin') {
      this.isAdmin = true;
    }
  }

  adminAuthorized() {
    return this.isAdmin;
  }

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

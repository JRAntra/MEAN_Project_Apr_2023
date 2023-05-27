import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    // If this request is not going to our API, don't modify it
    if (!req.url.startsWith(environment.apiUrl)) {
      return next.handle(req);
    }

    const authToken = this.auth.getToken();
    if (authToken === null) {
      return next.handle(req);
    }
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });
    return next.handle(authReq);
  }
}

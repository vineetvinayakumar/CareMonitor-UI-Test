import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost:3000/api/login';

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) {}

  login(data: { email: string; password: string }) {
    return this.http.post<any>(this.api, data).pipe(
      tap(res => {
        this.cookie.set('token', res.token);
        this.cookie.set('email', res.user.email);
      })
    );
  }

  logout() {
    this.cookie.deleteAll();
  }

  isLoggedIn(): boolean {
    return this.cookie.check('token');
  }

  getEmail() {
    return this.cookie.get('email');
  }
}

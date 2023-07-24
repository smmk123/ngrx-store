import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../store/auth/auth.state';

@Injectable()
export class AuthService {
  private apiUrl = 'https://limitless-fjord-38871.herokuapp.com/v1/auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.apiUrl, { username, password }).pipe(
      tap((user) => {
        
      })
    );
  }
}
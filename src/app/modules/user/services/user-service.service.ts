import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { map, tap } from 'rxjs';
import { jwtDecode } from "jwt-decode"

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private serverUrl = 'http://localhost:3000';
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`${this.serverUrl}/register`, user, this.httpOptions).pipe(
      tap((x) => {
        console.log('Registering', x);
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post(`${this.serverUrl}/login`, {"email": email, "password": password}, this.httpOptions)
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);
        return true;
      }))
  }

  isLoggedIn() {
    const isLocalStorageAvailable = typeof localStorage !== 'undefined';
    if (isLocalStorageAvailable)
    {
      const user = JSON.parse(localStorage.getItem('user') || '');
      if (user) {
        const token = user.accessToken;
        const decodedToken =  jwtDecode(token); 
        const sExpDate = decodedToken['exp'] || 0;
        if (token && new Date().getTime() < new Date(sExpDate * 1000).getTime())
        {
          return true;
        }
      }
    }
    return false;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8000/api/auth/';

  public login(user: any) {
    // Make an HTTP POST request to your login API endpoint
    return this.http.post(`${this.apiUrl}`, user);
  }
  public logout() {
    localStorage.setItem('access', '');
    return this.http.post(`${this.apiUrl}logout`, {});
  }
  public registerUser(user: any) {
    localStorage.setItem('userinfo', JSON.stringify(user));
    // Send an HTTP POST request to your registration API endpoint
    return this.http.post(`${this.apiUrl}register/`, user);
  }
  public refresh(body: any){
    return this.http.post(`${this.apiUrl}refresh`, body).pipe(
      catchError(err => {throw err})
    );
  }

}

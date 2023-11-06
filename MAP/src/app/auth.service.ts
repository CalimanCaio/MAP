import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8000';


  login(user: any) {
    // Make an HTTP POST request to your login API endpoint
    return this.http.post(`${this.apiUrl}/api/auth/`, user);
  }
  registerUser(user: any) {
    // Send an HTTP POST request to your registration API endpoint
    return this.http.post(`${this.apiUrl}/api/auth/register/`, user);
  }
}

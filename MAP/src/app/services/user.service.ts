import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8000/api/auth/';

  login(user: any) {
    // Make an HTTP POST request to your login API endpoint
    return this.http.post(`${this.apiUrl}`, user);
  }
  registerUser(user: any) {
    const usuariosCadastrados = JSON.parse('') || []; // localStorage.getItem('email')
    usuariosCadastrados.push(user);
    localStorage.setItem('email', JSON.stringify(usuariosCadastrados));
    // Send an HTTP POST request to your registration API endpoint
    return this.http.post(`${this.apiUrl}register/`, user);
  }
}

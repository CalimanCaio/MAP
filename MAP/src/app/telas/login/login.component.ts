import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service'; // Make sure the path to auth.service is correct

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = ''; // Make sure to explicitly set the type to string

  // constructor() {} // Inject the AuthService
  constructor(private router: Router, private authService: AuthService) {} // Inject the AuthService

  onSubmit() {
    const usuario = {
      username: this.username,
      password: this.password
    }
    // Call the login method from AuthService, assuming it is correctly implemented
    this.authService.login(usuario).subscribe(
      (response) => {
        console.log('Login successful:', response);
        alert('Login bem-sucedido');
        this.router.navigate(['map-inicial']);
        // Handle success, e.g., navigate to another page
      },
      (error) => {
        console.error('Login failed:', error);
        alert('falha no login');
      }
    );
  }
}

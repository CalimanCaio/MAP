import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = ''; // Make sure to explicitly set the type to string

  // constructor() {} // Inject the AuthService
  constructor(private router: Router, private userService: UserService) {} // Inject the AuthService

  onSubmit() {
    const usuario = {
      username: this.username,
      password: this.password
    }
    // Call the login method from AuthService, assuming it is correctly implemented
    this.userService.login(usuario).subscribe(
      (response: any) => {
        alert('Login bem-sucedido');
        localStorage.setItem('access', JSON.stringify(response.access));
        localStorage.setItem('refresh', JSON.stringify(response.refresh));
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

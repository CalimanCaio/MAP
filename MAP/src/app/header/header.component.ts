import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn = false;
  constructor(private router: Router, private userService: UserService){
    const accessToken = localStorage.getItem('access') || '';
    if(accessToken){
      this.isLoggedIn = !this.isLoggedIn;
    }
  }
  logout() {
    this.userService.logout().subscribe(
      () => {
        this.router.navigate(['']);
        alert('Você deslogou.');
      },
      error => {
        console.error('Login failed:', error);
        alert('Falha em deslogar.');
      }
    );
  }

}

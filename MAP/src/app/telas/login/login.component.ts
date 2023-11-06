import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router, private userService: UserService) {}

  onSubmit() {
    const usuario = {
      username: this.username,
      password: this.password
    }
    // Call the login method from AuthService, assuming it is correctly implemented
    this.userService.login(usuario).pipe(take(1)).subscribe({
      next: dt =>{
        // this.router.navigate['map-inicial'];
      },
      error: err => {
        console.log(err);
      },
    });
  }
}

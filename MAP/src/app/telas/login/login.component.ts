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
  email = '';
  password = '';

  constructor(private router: Router, private userService: UserService) {}

  onSubmit() {
    this.userService.login({ email: this.email, password: this.password}).pipe(take(1)).subscribe({
      next: dt => {
        this.router.navigate(['//////////////////']);
      },
      error: err => {
        console.log(err);
      },
    })
  }
}

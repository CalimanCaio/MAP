import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  senha = '';

  //constructor(private userService: UserService) {}

  constructor(private router: Router) {}

  onSubmit() {
    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuariosCadastrados.find(
      (user: any) => user.email === this.email && user.senha === this.senha
    );

    if (usuario) {
      this.router.navigate(['/']);
      alert('Login bem-sucedido!');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }
}

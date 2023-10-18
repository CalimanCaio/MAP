import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Verifique as credenciais (isso é um exemplo simplificado)
    if (this.email === 'email' && this.password === 'senha') {
      // Login bem-sucedido, redirecione para a página principal
      this.router.navigate(['/home']);
    } else {
      // Exiba uma mensagem de erro de login
      alert('Credenciais inválidas. Tente novamente.');
    }
  }
}

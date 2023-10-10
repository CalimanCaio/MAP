import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome = '';
  email = '';
  senha = '';

  constructor(private userService: UserService) {}

  onSubmit() {
    const usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };

    this.userService.cadastrarUsuario(usuario);

    // Limpar os campos após o cadastro
    this.nome = '';
    this.email = '';
    this.senha = '';

    alert('Cadastro realizado com sucesso!');
  }
}

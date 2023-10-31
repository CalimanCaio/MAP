import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome = '';
  email = '';
  senha = '';

  onSubmit() {
    // Crie um objeto para representar o usuário
    const usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };

    // Armazene o objeto de usuário no localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Limpe os campos após o cadastro
    this.nome = '';
    this.email = '';
    this.senha = '';

    // Exiba uma mensagem de sucesso (isso pode ser personalizado)
    alert('Cadastro realizado com sucesso!');

  }
}

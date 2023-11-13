import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  username = '';
  email = '';
  password = '';
  first_name = '';
  last_name = '';

  constructor(private userService: UserService) {}

  onSubmit() {
    const usuario = {
      username: this.username,
      email: this.email,
      password: this.password,
      first_name: "",
      last_name: "",
    };
    // Call the AuthService to register the user
    this.userService.registerUser(usuario).subscribe(
      (response) => {
        console.log(response)
        alert('Cadastro realizado com sucesso!');
      },
      (error) => {
        // Handle any registration errors
        console.error('Registration error:', error);
        // Display an error message to the user
        alert('Erro ao cadastrar o usuário');
      }
    );

    // Limpar os campos após o cadastro
    this.username = '';
    this.email = '';
    this.password = '';

  }
}

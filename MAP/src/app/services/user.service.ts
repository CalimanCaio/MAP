import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  cadastrarUsuario(usuario: any) {
    const usuariosCadastrados = JSON.parse(localStorage.getItem('email')) || [];
    usuariosCadastrados.push(usuario);
    localStorage.setItem('email', JSON.stringify(usuariosCadastrados));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath: string = "http://localhost:8000/api/auth";
  

  constructor(private http: HttpClient) {}

  public login(body: any){
    return this.http.post(`${this.basePath}/`, body).pipe(
      catchError(err => {throw err})
    );
  }

  public cadastro(body: any){
    return this.http.post(`${this.basePath}/register/`, body).pipe(
      catchError(err => {throw err})
    );
  }
  
  public refresh(body: any){
    return this.http.post(`${this.basePath}/refresh/`, body).pipe(
      catchError(err => {throw err})
    );
  }

}

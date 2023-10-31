import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath: string = "http://localhost:8000/auth";
  

  constructor(private http: HttpClient) {}

  
}

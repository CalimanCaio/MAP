import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  basePath: string = "http://localhost:8000/api/map/methodologies";
  
  constructor(private http: HttpClient) {}

  public getMap(){
    return this.http.get(`${this.basePath}/`).pipe(
      catchError(err => {throw err})
    );
  }

  public postMap(body: any){
    return this.http.post(`${this.basePath}/`, body).pipe(
      catchError(err => {throw err})
    );
  }

  public getMapById(id: number){
    return this.http.get(`${this.basePath}/${id}`).pipe(
      catchError(err => {throw err})
    );
  }

  public putMap(body: any, id: number){
    return this.http.put(`${this.basePath}/${id}`, body).pipe(
      catchError(err => {throw err})
    );
  }

  public deleteMap(id: number){
    return this.http.delete(`${this.basePath}/${id}`).pipe(
      catchError(err => {throw err})
    );
  }
}
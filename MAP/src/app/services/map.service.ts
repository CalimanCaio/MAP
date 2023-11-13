import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  basePath: string = "http://localhost:8000/api/map/projects";
  activePath: string = "http://localhost:8000/api/map/activities";

  constructor(private http: HttpClient) {}

  public getActivity(token: string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.activePath}/`, {headers: headers});
  }

  public getMap(token: string){
    // Create the HTTP headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    // Make the GET request with the token header
    return this.http.get(`${this.basePath}/`, { headers: headers });
  }

  public postMap(token: string, body: any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.basePath}/`, body, {headers: headers});
  }

  public getMapById(token: string, id: number){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${this.basePath}/${id}`, id, { headers: headers });
  }

  public putMap(token: string, body: any, id: number){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${this.basePath}/${id}`, body, {headers: headers});
  }

  public deleteMap(token: string, id: number){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.basePath}/${id}`, {headers: headers});
  }
}


// public getMap(token: any){
//   return this.http.get(`${this.basePath}/`).pipe(
//     catchError(err => {throw err})
//   );
// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardservicesService {
  BASE_URL : string  = environment.UserIdApi
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('currentUser')||'{}').token
    })
  };

  getUserbyId(id:string){
    return this.http.get(this.BASE_URL + id)
  }

}
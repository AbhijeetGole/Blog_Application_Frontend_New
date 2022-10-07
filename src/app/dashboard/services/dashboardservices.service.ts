import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardservicesService {
  BASE_URL : string  = "http://localhost:6001/technical-blogging/usergetbyId/"
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
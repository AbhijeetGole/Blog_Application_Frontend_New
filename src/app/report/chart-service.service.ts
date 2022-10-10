import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  BASE_URL : string  = "http://localhost:6002/technical-blogging/blog/"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('currentUser')||'{}').token
    })
  };
  getTopAuthors(){
    return this.http.get(this.BASE_URL + '/chart/report/topContributers')
  }
  getTopBlogs()
  {
    return this.http.get(this.BASE_URL + '/chart/report/popularBlogs')

  }
}

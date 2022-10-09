import { Component, OnInit } from '@angular/core';
import {  NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private toast: NgToastService) {}

  loggedinUser: any = '';
  ngOnInit(): void {}
  
  loggedin() {
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.toast.success({detail:"Logged out Successfully",duration:2000})
  }
}

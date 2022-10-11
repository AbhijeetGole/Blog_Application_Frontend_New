import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private toast: NgToastService) {}

  loggedinUser: any = '';
  userData: any;
  isadmin: boolean = false;
  ngOnInit(): void {}

  loggedin() {
    this.loggedinUser = localStorage.getItem('username');
    this.userData = localStorage.getItem('currentUser');
    this.userData = JSON.parse(this.userData);
    if (this.userData && this.userData.role == 'admin') 
    this.isadmin = true;
    return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    this.toast.success({ detail: 'Logged out Successfully', duration: 2000 });
  }
}

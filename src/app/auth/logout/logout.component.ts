import { Component, OnInit } from '@angular/core';
import {  NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private toast: NgToastService) { }

  ngOnInit(): void {
  }

}

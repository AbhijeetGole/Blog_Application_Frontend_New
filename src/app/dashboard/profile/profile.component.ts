import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';

import { DashboardservicesService } from '../../dashboard/services/dashboardservices.service';

@Component({
  selector: 'app-profile',

  templateUrl: './profile.component.html',

  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile!: any;

  userId: any;

  fname: any = '';

  loggeduser: any;

  constructor(
    private dashboardservice: DashboardservicesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
    });

    this.loggeduser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
}

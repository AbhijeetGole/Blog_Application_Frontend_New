import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { BlogserviceService } from '../service/blogservice.service';



@Component({

  selector: 'app-user-info',

  templateUrl: './user-info.component.html',

  styleUrls: ['./user-info.component.css']

})

export class UserInfoComponent implements OnInit {

  profile!: any;



  userId: any;



  fname: any = '';



  loggeduser: any;

  constructor( private activatedRoute: ActivatedRoute,

    private blogService: BlogserviceService,

    private router: Router) { }

 

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data) => {

      this.userId = data['id'];

      this.blogService.getUserbyId(this.userId).subscribe(response=>{

        this.loggeduser=response;

      })

    });

  }

}
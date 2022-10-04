import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../service/blogservice.service';

@Component({
  selector: 'app-recentblogs',
  templateUrl: './recentblogs.component.html',
  styleUrls: ['./recentblogs.component.css']
})
export class RecentblogsComponent implements OnInit {

  listBlogs!: any;
  constructor(private blogservice:BlogserviceService) { }

  defaultimage:string='../../../assets/Images/blog-1.avif';
  ngOnInit(): void {
    this.blogservice.getAllBlogs().subscribe(data=>{
      this.listBlogs = data
      console.log(data)
    }) 
  }
}

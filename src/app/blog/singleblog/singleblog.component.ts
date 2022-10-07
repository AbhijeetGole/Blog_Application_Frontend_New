import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogserviceService } from '../service/blogservice.service';
import{faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import{faThumbsUp as fasolidThumb} from '@fortawesome/free-solid-svg-icons'
import{faThumbsUp,faCommentDots}from '@fortawesome/free-regular-svg-icons'
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-singleblog',
  templateUrl: './singleblog.component.html',
  styleUrls: ['./singleblog.component.css'],
})
export class SingleblogComponent implements OnInit {
  blogId: string = '';
  blogDetails: any;
 
  edit: boolean = false;
  delete: boolean = false;
  showbutton = false;
  togglebutton=false;
  loggeduser: any = '';
  role = 'author';
  loggedUserId: any = '';
  authorId: any = '';
  writer:any='';
  liked:boolean=false;
  faEllipsis=faEllipsisVertical;
  faThumbsup=faThumbsUp;
  fasolidThumb=fasolidThumb;
  faComment=faCommentDots;
  showComments=false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogserviceService,
    private router:Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.blogId = data['id'];
    });
    this.blogService.getBlogbyId(this.blogId).subscribe((data) => {
      this.blogDetails = data;
      this.writer=this.blogDetails.username;
      this.authorId = this.blogDetails.authorId;
      if(this.blogDetails.imageUrl==''){
        this.blogDetails.imageUrl='https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
      }

      this.loggeduser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
      if (this.loggeduser != '') {
        this.loggedUserId = this.loggeduser._id;
        this.role = this.loggeduser.role;
      }

      if (this.role == 'admin') {
        this.showbutton = true;
        this.delete = true;
      }

      if ((this.loggedUserId == this.authorId)) {
        console.log('can be deleted');
        this.showbutton = true;
        this.delete = true;
        this.edit = true;
      }
    });
  }
  toggleIcon(str:string) {
    if(str=='ellipsis')
    this.togglebutton = !this.togglebutton;
    else if(str=='thumb')
    this.liked=!this.liked;
    else
    this.showComments=!this.showComments;

  }
  toggleThumb(){
    this.liked=!this.liked;
  }
  deleteblog(id:any){
    console.log(id)
     this.blogService.deleteblog(id).subscribe(response=>{
      this.toast.success({detail:"Blog Deleted Successfully",duration:2000})
      console.log(response)
      this.router.navigateByUrl('/blog/blogs');
     })
  }
  updateblog(id:string)
  {
      this.router.navigateByUrl(`/blog/blogs/edit/${id}`)
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogserviceService } from '../service/blogservice.service';

import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as fasolidThumb,faXmark } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faCommentDots } from '@fortawesome/free-regular-svg-icons';

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
  togglebutton = false;
  loggeduser: any = '';
  role = 'author';
  loggedUserId: any = '';
  authorId: any = '';
  writer: any = '';
  liked: boolean = false;
  faEllipsis = faEllipsisVertical;
  faThumbsup = faThumbsUp;
  fasolidThumb = fasolidThumb;
  faComment = faCommentDots;
  faxmark=faXmark;
  showComments = false;
  showLikedUser=false;
  likes:any;
  str = '';
  totalLikes = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.blogId = data['id'];
    });
    this.blogService.getBlogbyId(this.blogId).subscribe((data) => {
      this.blogDetails = data;
      console.log(this.blogDetails);
      this.writer = this.blogDetails.username;
      this.authorId = this.blogDetails.authorId;
      this.likes = this.blogDetails.blog_likes;
      this.totalLikes = this.likes.length;
      if (this.blogDetails.imageUrl == '') {
        this.blogDetails.imageUrl =
          'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
      }
      this.loggeduser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      this.likes.map((like:any) => {
        if (like.user_id == this.loggeduser._id) {
          this.liked = true;
        }
      });

      if (this.totalLikes == 0) {
        this.str = '0 Like';
      } else if (this.liked == true) {
        this.str = `You and ${this.totalLikes - 1} other liked`;
      } else {
        this.str = `${this.totalLikes} liked`;
      }
    
      if (this.loggeduser != '') {
        this.loggedUserId = this.loggeduser._id;
        this.role = this.loggeduser.role;
      }

      if (this.role == 'admin') {
        this.showbutton = true;
        this.delete = true;
      }
      if (this.loggedUserId == this.authorId) {
        console.log('can be deleted');
        this.showbutton = true;
        this.delete = true;
        this.edit = true;
      }
    });
  }
  toggleIcon(str: string) {
    if (str == 'ellipsis') this.togglebutton = !this.togglebutton;
    else if (str == 'thumb') {
      this.liked = !this.liked;
      this.blogService
        .addNremoveLike(this.blogId, this.blogDetails)
        .subscribe((response) => {
          alert(response);
          this.blogService.getBlogbyId(this.blogId).subscribe((data) => {
            this.blogDetails = data;
            this.likes = this.blogDetails.blog_likes;
            this.totalLikes = this.likes.length;

            if (this.totalLikes == 0) {
              this.str = '0 Like';
            } else if (this.liked == true) {
              this.str = `You and ${this.totalLikes - 1} other liked`;
            } else {
              this.str = `${this.totalLikes} liked`;
  }
          });
        });
    } else this.showComments = !this.showComments;
  }
  toggleThumb() {}
  deleteblog(id: any) {
    console.log(id);
    this.blogService.deleteblog(id).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl('/blog/blogs');
    });
  }
  updateblog(id: string) {
    this.router.navigateByUrl(`/blog/blogs/edit/${id}`);
  }
  toggleshowLikes(){
     this.showLikedUser=!this.showLikedUser; 
  }
}

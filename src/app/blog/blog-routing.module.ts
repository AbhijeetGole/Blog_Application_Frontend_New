import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListblogsComponent } from './listblogs/listblogs.component';
import { SingleblogComponent } from './singleblog/singleblog.component';
import { AuthGuard } from '../auth/auth.guard';
import { CreateblogComponent } from './createblog/createblog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children:[
     {
          path:'blogs/write',
          component:CreateblogComponent
      },
      {
        path:'blogs/edit/:id',
        component:EditBlogComponent
      }
    ]
  },
  {
    path: 'blogs',
    component: ListblogsComponent
  },
  {
    path: 'blogs/blogtitle/:id',
    component: SingleblogComponent
  },
  {

    path: 'user/:id',
    component: UserInfoComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

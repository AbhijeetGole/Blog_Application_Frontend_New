import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ListblogsComponent } from './listblogs/listblogs.component';
import { SingleblogComponent } from './singleblog/singleblog.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FilterPipe } from '../pipes/filter.pipe';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    ListblogsComponent,
    SingleblogComponent,
    CreateblogComponent,
    CommentComponent,
    EditBlogComponent,
    FilterPipe,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DashboardModule,
    CKEditorModule
  ]
})
export class BlogModule { }

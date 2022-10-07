import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { BlogserviceService } from '../service/blogservice.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css'],
})
export class CreateblogComponent implements OnInit {
  blogForm: FormGroup;

  blog = {
    title: '',
    content: '',
    imageUrl: '',
  };
  constructor(
    private builder: FormBuilder,
    private blogservice: BlogserviceService,
    private router: Router,
    private toast: NgToastService
  ) {
    this.blogForm = builder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: [''],
    });
  }
  ngOnInit(): void {}
  save() {
    this.blog.title = this.blogForm.value.title;
    this.blog.content = this.blogForm.value.content;
    this.blog.imageUrl = this.blogForm.value.image;
    this.blogservice.writeBlog(this.blog).subscribe((response: any) => {
      this.toast.success({detail:"Blog Created Successfully",duration:2000})
      console.log(response);
      this.router.navigateByUrl('/home');
    });
  }
}

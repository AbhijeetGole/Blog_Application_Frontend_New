import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { NavbarComponent } from '../../dashboard/navbar/navbar.component';
import {  NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
})
export class RegisteruserComponent implements OnInit {
  model!: User;
  title: any;
  isMessage: any;
  signupForm: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toast: NgToastService
  ) {}

  ngOnInit() {
    this.createForm();
    this.title = 'Create an account';
  }

  createForm() {
    this.signupForm = this.fb.group(
      {
        username: [
          '',
          [Validators.required, Validators.pattern('[a-zA-Z0-9]*')],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: [''],
        email: ['', [Validators.required, Validators.email]],
        check_boxx: ['', Validators.required],
      },
      { validators: this.matchingPasswords }
    );
  }

  matchingPasswords(password: string | number, password2: any) {
    return (group: FormGroup) => {
      // Check if both fields are the same
      if (group.controls[password].value === group.controls[password2].value) {
        return null; // Return as a match
      } else {
        return { matchingPasswords: true }; // Return as error: do not match
      }
    };
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.model = this.signupForm.value;
    this.authService.registerUser(this.model).subscribe((result) => {
      if (!result) {
        this.toast.error({detail:"Registeration Failed, Try Again Later !!",duration:2000})
        this.router.navigateByUrl('/auth/login');
      } else {
        this.toast.success({detail:"Registered Successfully",duration:2000})
        this.router.navigateByUrl('/auth/login');
      }
    });
  }
}

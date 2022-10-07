import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  FormControl,
  NgForm,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {  NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  title: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toast: NgToastService
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() {
    this.title = 'Administrator Login';
    this.createForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.authService
      .login({
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      })
      .subscribe((result) => {
        if (result) {
        this.toast.success({detail:"Logged in Successfully",duration:1000})
        let token = this.authService.getCurrentUser();

        if(token){
          token = this.authService.getDecodeToken(token)
        }
        
        if (token) {
          localStorage.setItem('token', token.firstname);
          console.log('Login Successful');
          this.router.navigate(['/']);
        } else {
          console.log('Login Failed');
        }
        }
      },(error: any) =>{
        this.toast.error({detail:"Login Failed, User Name or Password Is Incorrect !!",duration:2000})
      });
  }
}

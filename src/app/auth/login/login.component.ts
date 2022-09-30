import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm: any;
  // title: any;

 

loginForm=new FormGroup({
 email:new FormControl('',[Validators.required,Validators.email]),
 password:new FormControl('',[Validators.required,Validators.minLength(8)]),
})

loginUser()
{
 console.warn(this.loginForm.value);
}
get email()
{
 return this.loginForm.get('user')
}

get password()
{
 return this.loginForm.get('password')
}


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    // if (this.authService.isLoggedIn()) {
    //   this.router.navigateByUrl('/home');
    // }
  }

  ngOnInit() {
    // this.title = 'Administrator Login';
    // this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  get f() { return this.loginForm.controls }
  onSubmit() {
    this.authService.login({
      // email: this.loginForm.get('email').value,
      // password: this.loginForm.get('password').value
    }).subscribe(
      result => {
        if (result) {
          this.router.navigateByUrl('/home');
        }
      }
    )
  }

}
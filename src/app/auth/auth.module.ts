import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisteruserComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
})
export class AuthModule { 
  constructor(){
  }
}

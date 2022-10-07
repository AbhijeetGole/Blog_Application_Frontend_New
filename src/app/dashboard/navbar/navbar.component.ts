import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';


// @NgModule({
//   imports: [NgbModule],
// })
// export class YourAppModule {
// }
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {

}
loggedin() {
  return localStorage.getItem('token');
}
onLogout(){
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}
}

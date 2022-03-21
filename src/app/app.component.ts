import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router) {
    this.router.config.unshift(
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    );
  }


}


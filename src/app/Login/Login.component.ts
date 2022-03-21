import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  user: any = null;
  notifyMessage: string = "";

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  loginUser() {
    const credentials = this.loginForm.value;

    this.authService.login(credentials).subscribe({
      next: async (dados) => {
        this.user = dados;
        this.notifyMessage = "Sucesso!";
        // window.location.reload();
      },
      error: () => {
        this.user = null;
        this.notifyMessage = 'O usuário e a senha fornecidos estão incorretos.'
      }
    });
  }

}

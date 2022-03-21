import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    taxIdNumber: '',
    name: '',
    birthDate: '',
    genre: '',
    phoneNumber: '',
    email: '',
    password: ''
  })

  notifyMessage: string = "";


  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  registerUser() {
    let data = this.registerForm.value

    this.authService.register(data).subscribe({
      next: (dados) => {
        this.notifyMessage = "Sucesso!"
      },
      error: (e) => {
        if (e.error) {
          this.notifyMessage = e.error
        } else {
        this.notifyMessage = "Algo deu errado."
        }
      }
    })

  }

}

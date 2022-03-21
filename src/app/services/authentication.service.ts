import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(credentials: any) {
    return this.http.post<any>(`${environment.authAPI}/login`, {credentials})
  }

  register(dados: any) {
    return this.http.post<any>(`${environment.authAPI}/register`, {dados})
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}

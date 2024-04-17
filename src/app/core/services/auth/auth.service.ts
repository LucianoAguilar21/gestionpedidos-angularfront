import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(form: FormGroup) {
    return this.httpClient.post(`${environment.URL_BASE}auth/login`, form.value)
  }

  register(form: FormGroup) {
    return this.httpClient.post(`${environment.URL_BASE}auth/register`, form.value)
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  logout() {
    localStorage.removeItem('token');
  }
}

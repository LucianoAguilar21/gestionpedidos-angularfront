import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  hide = true;
  formLogin : FormGroup;

  constructor(private router: Router, private loginService : AuthService){
    this.formLogin = new FormGroup({
      username : new FormControl(),
      password : new FormControl()
    })
  }

  ngOnInit(): void {
    
  }
  getUsernameErrorMessage(){
       return "Ingrese su usuario"; 
  }

  getPasswordErrorMessage(){
    return "Ingrese su password"
  }
  
   async login(){
    // const user : User = {
    //   username : this.formLogin.value.username ?? '',
    //   password : this.formLogin.value.password ?? ''
    // }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    });

    this.loginService.login(this.formLogin).subscribe({
      next:(res:any) =>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigateByUrl("/home")
      }
    })


  }

}

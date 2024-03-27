import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  ngOnInit() {}
  loginError: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}
  login() {    
    console.log(this.loginForm.value);
    this.http.post<any>('http://localhost/api/login', this.loginForm.value, {headers: {'accept': 'application/json'}})
    .subscribe(data => {
      if(data.user === undefined || data.token === undefined) {
        console.error('error al iniciar sesion');
        this.loginError = true;
      } else {
        this.setOpen(false);
        console.log(data.user);
        localStorage.setItem('id', data.user.id)
        localStorage.setItem('name', data.user.name)
        localStorage.setItem('email', data.user.email)
        localStorage.setItem('token', data.token)
        console.log(data.token);
        setTimeout(() => {
          this.router.navigateByUrl('/app/tabs/home')
        }, 500)      
      }
    })
  }
}

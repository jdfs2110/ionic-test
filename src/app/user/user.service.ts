import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  checkLogged() {
    if (localStorage.getItem('id') !== null && localStorage.getItem('id') !== undefined) { // logged in
      // this.route.navigateByUrl('/')
    } else { // not logged in
      this.route.navigateByUrl('/onboarding');
    }
  }
  constructor(private route: Router) { }
}

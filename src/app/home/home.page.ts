import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  id = localStorage.getItem('id');
  name = localStorage.getItem('name');
  email = localStorage.getItem('email');

  constructor(private userservice: UserService) {}
  ngOnInit() {
    this.userservice.checkLogged();
  }

}

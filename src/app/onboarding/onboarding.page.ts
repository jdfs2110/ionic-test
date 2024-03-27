import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    if (localStorage.getItem('id') !== null && localStorage.getItem('id') !== undefined) { // logged in
      this.route.navigateByUrl('/')
    }
  }

}

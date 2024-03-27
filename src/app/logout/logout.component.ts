import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent  implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {}

  logout() {
    this.http.post<any>('http://localhost/api/logout', {}, {headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }})
    .subscribe(data => {
      console.log(data);
      localStorage.clear();
      setTimeout(() => {
        this.router.navigateByUrl('/onboarding')
      }, 500)
    })
  }
}

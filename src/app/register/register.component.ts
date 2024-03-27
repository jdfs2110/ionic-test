import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required
    ])),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required)

  });


  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private http: HttpClient) { }

  ngOnInit() { }
  success: boolean = false;
  register($event: Event) {
    $event.preventDefault();

    if (this.registerForm.value.password !== this.registerForm.value.password_confirmation) {
      console.error('las contraseñas no coinciden')
    } else {
      this.http.post<any>('http://localhost/api/registro', this.registerForm.value, { headers: { 'accept': 'application/json' } })
        .subscribe(data => {
          console.log(data)
          this.success = true
        })
    }
    console.log(this.registerForm.value)
  }

  // validations = {
  //   'name': [
  //     { type: 'required', message: 'Name is required.' },
  //   ],
  //   'email': [
  //     { type: 'required', message: 'Email is required.' }
  //   ],
  //   'password': [
  //     { type: 'required', message: 'Password is required.' }
  //   ],
  //   'password_confirmation': [
  //     { type: 'required', message: 'A confirmation of your password is required.' }
  //   ],
  // }

}

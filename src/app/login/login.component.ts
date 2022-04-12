import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'lodash-es';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (isEmpty(this.email) || isEmpty(this.password)) {
      alert('Please enter email and password');
      return;
    }
    console.log(this.email, this.password);
    this.router.navigate(['/home']);
  }
}

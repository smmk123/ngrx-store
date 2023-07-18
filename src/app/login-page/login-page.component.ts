import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page-component',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username!: string;
  password!: string;

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

}

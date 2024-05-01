import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  password: string = '';
  retypePassword: string = '';
  constructor(private auth: AuthService) { }

  ngOnInit() {
    return 0;
  }

  signup() {
    this.auth.signup(this.email, this.password, this.retypePassword);
  }
}

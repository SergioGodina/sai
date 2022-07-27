import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:string;
  password:string;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.user);
    console.log(this.password);
  }

}

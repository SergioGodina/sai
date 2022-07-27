import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:string;
  email:string;
  pass1:string;
  pass2:string;

  constructor() { }

  ngOnInit(): void {
  }


  register(){

  }
}

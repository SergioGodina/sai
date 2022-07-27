import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  nav = false;

  constructor(public router:Router) { }

  ngOnInit() {
    this.nav = true;
  }

  navToggle(){
    if (this.nav == true) {
      this.nav = false;
    }else{
      this.nav = true;
    }
  }

  logOut(){
    this.router.navigateByUrl('/login');
  }

  bluetoothConnection(){

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  opcion = false;

  constructor() { }

  ngOnInit() {
    this.opcion = true;
  }

  cambiarModo(){
    if (this.opcion == true) {
      this.opcion = false;
    }else{
      this.opcion = true;
    }
  }

}

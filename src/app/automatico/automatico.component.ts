import { Component, Input, OnInit } from '@angular/core';
import { ApiresComponent } from '../apires/apires.component';

@Component({
  selector: 'app-automatico',
  templateUrl: './automatico.component.html',
  styleUrls: ['./automatico.component.scss']
})
export class AutomaticoComponent implements OnInit {

  registros:any = [];
  temp = 0;
  logs = {};

  constructor(public api:ApiresComponent) { }

  ngOnInit(){
    this.temp = this.api.temp;
  }

  addTemp(){
    this.api.addTemp();
  }
  
  removeTemp(){
    this.api.removeTemp();
  }

  setTemp(){
    this.api.uploadLog();
  }

}

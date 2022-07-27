import { Component, Input, OnInit } from '@angular/core';
import { ApiresService } from '../apires.service'; 

@Component({
  selector: 'app-automatico',
  templateUrl: './automatico.component.html',
  styleUrls: ['./automatico.component.scss']
})
export class AutomaticoComponent implements OnInit {

  registros:any = [];
  temp;
  logs = {};

  constructor(public api:ApiresService) { }

  ngOnInit(){
    this.api.getLogs();
    setTimeout(() => {
      this.temp = this.api.adjustment_temperature;
    }, 500);
  }

  addTemp(){
    this.api.addTemp();
    this.temp = this.api.adjustment_temperature;
  }
  
  removeTemp(){
    this.api.removeTemp();
    this.temp = this.api.adjustment_temperature;
  }

  setTemp(){
    this.api.uploadLog();
  }

}

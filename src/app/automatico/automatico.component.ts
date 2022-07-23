import { Component, Input, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-automatico',
  templateUrl: './automatico.component.html',
  styleUrls: ['./automatico.component.scss']
})
export class AutomaticoComponent implements OnInit {

  registros:any = [];
  temp = 0;
  logs = {};

  constructor(public rest:RestService) { }

  ngOnInit(){
    this.getLogs();
  }

  getLogs() {
    this.registros = [];
    this.rest.getLastLog().subscribe((data: {}) => {
      this.registros = data;
      this.temp = this.registros[0].adjustment_temperature;
      console.log(data)
    });
  }

  setTemp(){
      this.registros = {
        "datetime": Date.now(),
        "adjustment_temperature": this.temp,
        "autoMode_state": this.registros[0].autoMode_state,
        "mHigh_state": this.registros[0].mHigh_state,
        "mLow_state": this.registros[0].mLow_state,
        "pumb_state": this.registros[0].pumb_state,   
      }
      this.addLog();
      this.getLogs();
  }

  addTemp(){
    if(this.temp < 30){
      this.temp++;
    }
  }

  removeTemp(){
    if(this.temp > 0){
      this.temp--;
    }
  }

  addLog(){
    this.rest.addLog(this.registros).subscribe(logs => {
      console.log(logs);
    });
  }
}

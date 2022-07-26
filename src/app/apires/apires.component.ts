import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-apires',
  templateUrl: './apires.component.html',
  styleUrls: ['./apires.component.scss']
})
export class ApiresComponent implements OnInit{ 

  registros:any = [];
  temperatura:any = [];

  temp = 0;
  logs = {};

  state;
  mHigh_state;
  mLow_state;
  pumb_state;
  autoMode_state;
  adjustment_temperature;

  ngOnInit() {
    this.getLogs();
    this.getTemperatura();
    setTimeout(()=>{
      this.autoMode_state =  this.registros[0].autoMode_state;
      this.temp = this.temperatura[0].current_temperature;
      this.mHigh_state = this.registros[0].mHigh_state;
      this.mLow_state = this.registros[0].mLow_state;
      this.pumb_state = this.registros[0].pumb_state;
      this.adjustment_temperature = this.registros[0].adjustment_temperature;     
    }, 1500)
  }

  constructor(public rest:RestService) { }

  //logs
  getLogs() {
    this.registros = [];
    this.rest.getLastLog().subscribe((data: {}) => {
      this.registros = data;
    });
  }

  addLog(){
    this.rest.addLog(this.registros).subscribe(logs => {
    });
  }

  //temp
  getTemperatura() {
    this.temperatura = [];
    this.rest.getTemp().subscribe((data: {}) => {
      this.temperatura = data;
    });
  }


  uploadLog(){
    this.registros = {
      "datetime": Date.now(),
      "adjustment_temperature": this.adjustment_temperature,
      "autoMode_state": this.autoMode_state,
      "mHigh_state": this.mHigh_state,
      "mLow_state": this.mLow_state,
      "pumb_state": this.pumb_state,   
    }
    this.addLog();
    this.getLogs();
  }


//automatico

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


//manual

getState(){
  if(this.registros[0].mLow_state == true){
    this.state = 1;
  } else if(this.registros[0].mHigh_state == true){
    this.state = 2;
  } else {
    this.state = 0;
  }
}

changeEngine(){
  this.getState();
  switch(this.state){
    case 0:
      this.state = 1;
      this.mHigh_state = false;
      this.mLow_state = true;
      break;
    case 1:
      this.state = 2;
      this.mHigh_state = true;
      this.mLow_state = false;
      break;
    case 2:
      this.state = 0;
      this.mHigh_state = false;
      this.mLow_state = false;
      break;
  }
  this.uploadLog();

}

changePumb(){
  if(this.registros[0].pumb_state == true){
    this.pumb_state = false;
  } else {
    this.pumb_state = true;
  }
  this.uploadLog();
}

//slider
AutoChange(){
  let checkBox = document.getElementById("lol-checkbox") as HTMLInputElement | null;
  let autoMode = document.getElementById("auto") as HTMLDivElement | null;
  let manualMode = document.getElementById("manual") as HTMLDivElement | null;

  if(checkBox.checked == true){
    this.autoMode_state = true
    autoMode.style.visibility = "visible";
    manualMode.style.visibility = "hidden";
    this.uploadLog();
  } else {
    this.autoMode_state = false
    manualMode.style.visibility = "visible";
    autoMode.style.visibility = "hidden";
    this.uploadLog();
  }
}

}

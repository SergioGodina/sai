import { Injectable, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ApiresService implements OnInit {

  constructor(public rest:RestService) {
  }

  registros:any = {};
  temperatura:any = {};

  current_temperature;
  logs = {};

  state;
  mHigh_state;
  mLow_state;
  pumb_state;
  autoMode_state;
  adjustment_temperature;
  temp;

  button = false;


  ngOnInit() {
    this.getLogs();
    this.getTemperatura();
    setTimeout(() => {
      this.current_temperature = this.temperatura[0].current_temperature
      this.getAutoCheck();
    }, 2000);
  }



  //logs
  getLogs() {
    this.registros = [];
    this.rest.getLastLog().subscribe((data: {}) => {
      this.registros = data;
      let dat = data;
      this.autoMode_state =  dat[0].autoMode_state;
      this.mHigh_state = dat[0].mHigh_state;
      this.mLow_state = dat[0].mLow_state;
      this.pumb_state = dat[0].pumb_state;
      this.adjustment_temperature = dat[0].adjustment_temperature;
    });
    console.log("Datos de Logs almacenados")
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
    setTimeout(() => {
      this.rest.addLog(this.registros).subscribe();
      console.log("Subiendo datos a logs" + this.registros)
    }, 300);
    setTimeout(() => {
      this.getLogs();
    }, 500);
  }

  //temp
  getTemperatura() {
    this.temperatura = [];
    this.rest.getTemp().subscribe((data: {}) => {
      this.temperatura = data;
    });
    console.log("Datos de Temperatura almacenados")
  }


//automatico

addTemp(){
  if(this.adjustment_temperature < 30){
    this.adjustment_temperature++;
  }
}

removeTemp(){
  if(this.adjustment_temperature > 0){
    this.adjustment_temperature--;
  }
}


//manual

getState(){
  if(this.mLow_state == true){
    this.state = 1;
  } else if(this.mHigh_state == true){
    this.state = 2;
  } else {
    this.state = 0;
  }
}

changeEngine(){
  this.button = true;
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
  setTimeout(() => {
    this.button = false;
  }, 1000);
}

changePumb(){
  this.button = true;
  if(this.pumb_state == true){
    this.pumb_state = false;
  } else {
    this.pumb_state = true;
  }
  this.uploadLog();
  setTimeout(() => {
    this.button = false;
  }, 1000);
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

getAutoCheck(){
  let checkBox = document.getElementById("lol-checkbox") as HTMLInputElement | null;
  let autoMode = document.getElementById("auto") as HTMLDivElement | null;
  let manualMode = document.getElementById("manual") as HTMLDivElement | null;

  if(this.autoMode_state == true){
    checkBox.checked = true;
    autoMode.style.visibility = "visible";
    manualMode.style.visibility = "hidden";
  } else {
    checkBox.checked = false;
    manualMode.style.visibility = "visible";
    autoMode.style.visibility = "hidden";
  }
}


getCurrentTemp(){
  return this.current_temperature;
}

}

import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  registros:any = [];
  state;
  mHigh_state;
  mLow_state;
  pumb_state;

  constructor(public rest:RestService) { }

  ngOnInit(): void {
    this.getLogs();
  }

  getLogs() {
    this.registros = [];
    this.rest.getLastLog().subscribe((data: {}) => {
      this.registros = data;
      console.log(data)
    });
  }

  setState(i: number){
    if (i == 1) {
      this.registros = {
        "datetime": Date.now(),
        "adjustment_temperature": this.registros[0].adjustment_temperature,
        "autoMode_state": this.registros[0].autoMode_state,
        "mHigh_state": this.mHigh_state,
        "mLow_state": this.mLow_state,
        "pumb_state": this.registros[0].pumb_state,   
      }   
    } else if (i == 2){
      this.registros = {
        "datetime": Date.now(),
        "adjustment_temperature": this.registros[0].adjustment_temperature,
        "autoMode_state": this.registros[0].autoMode_state,
        "mHigh_state": this.registros[0].mHigh_state,
        "mLow_state": this.registros[0].mLow_state,
        "pumb_state": this.pumb_state,   
      }   
    }
    this.addLog();
    this.getLogs();
  }

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
    this.setState(1);

  }

  changePumb(){
    if(this.registros[0].pumb_state == true){
      this.pumb_state = false;
    } else {
      this.pumb_state = true;
    }
    this.setState(2);
  }

  addLog(){
    this.rest.addLog(this.registros).subscribe(logs => {
      console.log(logs);
    });
  }


}

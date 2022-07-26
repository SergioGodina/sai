import { Component, OnInit } from '@angular/core';
import { ApiresComponent } from '../apires/apires.component';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  registros:any = [];

  constructor(public api:ApiresComponent) { }

  ngOnInit(): void {
   
  }

  changeEngine(){
    this.api.changeEngine();
  }

  changePumb(){
    this.api.changePumb();
  }

}

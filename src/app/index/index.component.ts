import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiresComponent } from '../apires/apires.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  registros:any = [];
  autoMode_state;
  index = "";

  ngOnInit() {
    this.autoMode_state = this.api.autoMode_state;
  } 
  constructor(public api:ApiresComponent, private route:Router) { }

  AutoChange(){
    this.api.AutoChange();
    this.autoMode_state = this.api.autoMode_state;
    }

}

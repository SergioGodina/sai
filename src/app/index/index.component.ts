import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiresService } from '../apires.service';

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
    setTimeout(() => {
      this.autoMode_state = this.api.autoMode_state;
    }, 500);
    
  } 
  constructor(public api:ApiresService, private route:Router) { }

  AutoChange(){
    this.api.AutoChange();
    this.autoMode_state = this.api.autoMode_state;
    }

}

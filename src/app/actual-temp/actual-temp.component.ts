import { Component, OnInit } from '@angular/core';
import { ApiresComponent } from '../apires/apires.component';


@Component({
  selector: 'app-actual-temp',
  templateUrl: './actual-temp.component.html',
  styleUrls: ['./actual-temp.component.scss']
})
export class ActualTempComponent implements OnInit {

  temp;

  constructor(public api:ApiresComponent) { }

  ngOnInit() {
    this.temp = this.api.temp;
  }

}

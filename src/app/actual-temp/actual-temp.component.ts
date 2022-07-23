import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-actual-temp',
  templateUrl: './actual-temp.component.html',
  styleUrls: ['./actual-temp.component.scss']
})
export class ActualTempComponent implements OnInit {

  temperatura:any = [];

  constructor(public rest:RestService) { }

  ngOnInit() {
    this.getTemperatura();
  }

  getTemperatura() {
    this.temperatura = [];
    this.rest.getTemp().subscribe((data: {}) => {
      this.temperatura = data;
    });
  }

}

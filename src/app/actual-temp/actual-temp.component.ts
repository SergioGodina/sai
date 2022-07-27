import { Component, Input, OnInit } from '@angular/core';
import { ApiresService } from '../apires.service'; 


@Component({
  selector: 'app-actual-temp',
  templateUrl: './actual-temp.component.html',
  styleUrls: ['./actual-temp.component.scss']
})
export class ActualTempComponent implements OnInit {


  temperatura;
  temp;

  constructor(private api:ApiresService) { 
  }

  @Input()

  ngOnInit() {
    this.api.ngOnInit();
    setTimeout(() => {
      this.temperatura = this.api.getCurrentTemp();
    }, 500);
  }


}

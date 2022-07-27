import { Component, OnInit } from '@angular/core';
import { ApiresService } from '../apires.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  registros:any = [];

  constructor(public api:ApiresService) { }

  button;
  ngOnInit(): void {
    this.button = this.api.button;
  }

  changeEngine(){
    this.api.changeEngine();
  }

  changePumb(){
    this.api.changePumb();
  }
}

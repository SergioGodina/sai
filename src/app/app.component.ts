import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'mdb-angular-ui-kit-free';

  opcion = false;

  cambiarModo(){
    if (this.opcion == true) {
      this.opcion = false;
    }else{
      this.opcion = true;
    }
  }
}

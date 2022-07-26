import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { IndexComponent } from '../index/index.component';
import { AutomaticoComponent } from '../automatico/automatico.component';
import { ManualComponent } from '../manual/manual.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full"},
  { path: 'index', component: IndexComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'automatico', component: AutomaticoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [    
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

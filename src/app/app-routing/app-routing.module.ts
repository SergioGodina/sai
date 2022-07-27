import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { IndexComponent } from '../index/index.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full"},
  { path: 'index', component: IndexComponent, pathMatch: "full" },
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: 'register', component: RegisterComponent, pathMatch: "full" },
];

@NgModule({
  imports: [    
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthentificationComponent } from './authentification.component';

const routes: Routes = [
  {
    path: '', 
    component:AuthentificationComponent,
    children: [
      { path: 'login', component:LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }

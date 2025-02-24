import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthentificationComponent } from './authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TawasalnaModule } from '../tawasalna-module';


@NgModule({
  declarations: [
    LoginComponent,
    AuthentificationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthentificationRoutingModule,
    HttpClientModule,
    TawasalnaModule
  ]
})
export class AuthentificationModule { }

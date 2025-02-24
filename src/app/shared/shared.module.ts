import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadableEnumPipe } from '../readable-enum.pipe';
import { TawasalnaModule } from '../tawasalna-module';
import { NavbarComponent } from './navbar/navbar.component';
import { FeatherModule } from 'angular-feather';
import { RouterModule } from '@angular/router';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { ChangerMotDePassComponent } from './changer-mot-de-pass/changer-mot-de-pass.component';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    ReadableEnumPipe,
    NavbarComponent,
    MonProfilComponent,
    ChangerMotDePassComponent
  ],
  imports: [
    CommonModule,
    TawasalnaModule,
    FeatherModule, 
    RouterModule,
    FormsModule,
    SharedRoutingModule,
    
  ],
  exports: [
    ReadableEnumPipe,
    ChangerMotDePassComponent,
    MonProfilComponent
  ]
})
export class SharedModule { }

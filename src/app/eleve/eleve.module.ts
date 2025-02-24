import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EleveRoutingModule } from './eleve-routing.module';
import { MesCoursComponent } from './mes-cours/mes-cours.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard/dashboard.module';
import { TawasalnaModule } from '../tawasalna-module';
import { NoteEtMoyenneComponent } from './note-et-moyenne/note-et-moyenne.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { SharedModule } from '../shared/shared.module';
import { ActualitesComponent } from './actualites/actualites.component';
import { MenuComponent } from './menu/menu.component';
import { DisciplineComponent } from './discipline/discipline.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';


@NgModule({
  declarations: [
    MesCoursComponent,
    NoteEtMoyenneComponent,
    NoteDetailsComponent,
    ActualitesComponent,
    MenuComponent,
    DisciplineComponent,
    ReclamationsComponent
  ],
  imports: [
    CommonModule,
    EleveRoutingModule,
    ReactiveFormsModule,
    DashboardModule,
    TawasalnaModule,
    FormsModule,
    SharedModule
  ]
})
export class EleveModule { }

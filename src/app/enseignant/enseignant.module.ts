import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { MesCoursComponent } from './mes-cours/mes-cours.component';

import { TawasalnaModule } from '../tawasalna-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { SharedModule } from '../shared/shared.module';
import { DisciplineComponent } from './discipline/discipline.component';
import { AddDisciplineComponent } from './discipline/add-discipline/add-discipline.component';
import { ModifierDisciplineComponent } from './discipline/modifier-discipline/modifier-discipline.component';
import { DeleteConfirmationComponent } from './discipline/delete-confirmation/delete-confirmation.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { DetailsReclamationComponent } from './reclamations/details-reclamation/details-reclamation.component';
import { ReponseComponent } from './reclamations/reponse/reponse.component';


import {AddModuleComponent} from "../dashboard/dashboard-components/gestion-module/add-module/add-module.component";
import {
  DeleteModuleComponent
} from "../dashboard/dashboard-components/gestion-module/delete-module/delete-module.component";
import {
  DetailModuleComponent
} from "../dashboard/dashboard-components/gestion-module/detail-module/detail-module.component";

import { MatDialogModule } from '@angular/material/dialog';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [
    MesCoursComponent,
    AddCoursComponent,
    DisciplineComponent,
    AddDisciplineComponent,
    ModifierDisciplineComponent,
    DeleteConfirmationComponent,
    ReclamationsComponent,
    ActualitesComponent,
    DetailsReclamationComponent,
    ReponseComponent,
    AddModuleComponent,
    DeleteModuleComponent,


  ],
  imports: [
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
    EnseignantRoutingModule,
    DashboardModule,
    TawasalnaModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    DatePipe
  ]
})
export class EnseignantModule { }

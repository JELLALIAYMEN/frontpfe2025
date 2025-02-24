import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { MesCoursComponent } from './mes-cours/mes-cours.component';
import { DashboardModule } from '../dashboard/dashboard.module';
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
  ],
  imports: [
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

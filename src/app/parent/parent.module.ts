import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRoutingModule } from './parent-routing.module';
import { TawasalnaModule } from '../tawasalna-module';
import { FeatherModule } from 'angular-feather';
import { SharedModule } from '../shared/shared.module';

// Importation de DashboardModule (qui exporte DashboardComponent)


// Composants spécifiques au module Parent
import { HomeParentComponent } from './home-parent/home-parent.component';
import { MoyenneEtNoteComponent } from './moyenne-et-note/moyenne-et-note.component';
import { MesElevesComponent } from './mes-eleves/mes-eleves.component';
import { SelectionEleveComponent } from './selection-eleve/selection-eleve.component';
import { DisciplineComponent } from './discipline/discipline.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [

    HomeParentComponent,
    MoyenneEtNoteComponent,
    MesElevesComponent,
    SelectionEleveComponent,
    DisciplineComponent,

  ],
  imports: [
    CommonModule,
    DashboardModule, // DashboardComponent comes from this module
    ParentRoutingModule,
    TawasalnaModule,
    FeatherModule,
    SharedModule
  ]
})

export class ParentModule { }

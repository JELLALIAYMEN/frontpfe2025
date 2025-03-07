import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ParentRoutingModule } from "./parent-routing.module";
import { TawasalnaModule } from "../tawasalna-module";
import { FeatherModule } from "angular-feather";
import { SharedModule } from "../shared/shared.module";

// Import DashboardModule (but DO NOT declare DashboardComponent again)
import { DashboardModule } from "../dashboard/dashboard.module";

// Components for ParentModule
import { HomeParentComponent } from "./home-parent/home-parent.component";
import { MoyenneEtNoteComponent } from "./moyenne-et-note/moyenne-et-note.component";
import { MesElevesComponent } from "./mes-eleves/mes-eleves.component";
import { SelectionEleveComponent } from "./selection-eleve/selection-eleve.component";
import { DisciplineComponent } from "./discipline/discipline.component";



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

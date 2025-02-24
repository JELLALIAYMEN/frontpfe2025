import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesCoursComponent } from './mes-cours/mes-cours.component';
import { NoteEtMoyenneComponent } from './note-et-moyenne/note-et-moyenne.component';
import { HomeEleveComponent } from './home-eleve/home-eleve.component';
import { MenuComponent } from './menu/menu.component';
import { DisciplineComponent } from './discipline/discipline.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'home-eleve', component: HomeEleveComponent },
      { path: 'mescours', component: MesCoursComponent },
      { path: 'notes-moyenne', component: NoteEtMoyenneComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'discipline-eleve', component: DisciplineComponent },
      { path: 'actualites', component: ActualitesComponent },
      { path: 'reclamations', component: ReclamationsComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EleveRoutingModule { }

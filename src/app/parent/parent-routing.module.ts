import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoyenneEtNoteComponent } from './moyenne-et-note/moyenne-et-note.component';
import { HomeParentComponent } from './home-parent/home-parent.component';
import { MesElevesComponent } from './mes-eleves/mes-eleves.component';
import { DisciplineComponent } from './discipline/discipline.component';

const routes: Routes = [
  {path:'', children: [
    {path:'moyenne-note/:id', component: MoyenneEtNoteComponent},
    {path:'home-parent', component:HomeParentComponent},
    {path:'mes-eleves', component:MesElevesComponent},
    { path: 'discipline/:id', component: DisciplineComponent },

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { ChangerMotDePassComponent } from './changer-mot-de-pass/changer-mot-de-pass.component';

const routes: Routes = [
  {path:'', children: [
    {path:'mon-profile', component: MonProfilComponent},
    {path:'change-pwd', component: ChangerMotDePassComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';


import { GestionEnseignantsComponent } from './dashboard/dashboard-components/gestion-enseignants/gestion-enseignants.component';
import { GestionElevesComponent } from './dashboard/dashboard-components/gestion-eleves/gestion-eleves.component';
import { GestionParentsComponent } from './dashboard/dashboard-components/gestion-parents/gestion-parents.component';
import { GestionActualitesComponent } from './dashboard/dashboard-components/gestion-actualites/gestion-actualites.component';
//import { GestionClassComponent } from './dashboard/dashboard-components/gestion-class/gestion-class.component';
import { GestionReclamationComponent } from './dashboard/dashboard-components/gestion-reclamation/gestion-reclamation.component';
import { GestionDisciplineComponent } from './dashboard/dashboard-components/gestion-discipline/gestion-discipline.component';
import { HomeEnseignantComponent } from './enseignant/home-enseignant/home-enseignant.component';
//import { GestionSallesComponent } from './dashboard/dashboard-components/gestion-salles/gestion-salles.component';
import { GestionMatiereComponent } from './dashboard/dashboard-components/gestion-matiere/gestion-matiere.component';
import { HomeMoyenneEtNoteComponent } from './dashboard/dashboard-components/GestionMoyenneEtNote/home-moyenne-et-note/home-moyenne-et-note.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AcceuilComponent } from './dashboard/dashboard-components/gestion-Menu/acceuil/acceuil.component';
import { GestionPaiementComponent } from './dashboard/dashboard-components/gestion-paiement/gestion-paiement.component';
import { EleveGuard } from './guards/eleve.guard';
import { ParentGuard } from './guards/parent.guard';
import { EnseignantGuard } from './guards/enseignant.guard';
import { authGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { GestionCalendrierExComponent } from './dashboard/dashboard-components/gestionCalendrierEx/gestion-calendrier-ex/gestion-calendrier-ex.component';
import { GestionEmploiTempsComponent } from './dashboard/dashboard-components/gestion-Emploi-Temps/gestion-emploi-temps/gestion-emploi-temps.component';
import { GestionModuleComponent } from './dashboard/dashboard-components/gestion-module/gestion-module.component';
import { AssaignerHomeworkComponent } from './dashboard/dashboard-components/gestion-module/asseigner-homeword/asseigner-homeword.component';
import { GestionTypePaiementComponent } from './dashboard/dashboard-components/gestion-type-paiement/gestion-type-paiement.component';
import { GestionCreditComponent } from './dashboard/dashboard-components/gestion-credit/gestion-credit.component';
import { AjoutCreditComponent } from './dashboard/dashboard-components/gestion-credit/ajout-credit/ajout-credit.component';
import {AddSalleComponent} from "./dashboard/dashboard-components/gestion-salles/add-salle/add-salle.component";
import {AddClassComponent} from "./dashboard/dashboard-components/gestion-class/add-class/add-class.component";
import {
  DetailModuleComponent
} from "./dashboard/dashboard-components/gestion-module/detail-module/detail-module.component";

const routes: Routes = [
  {
    path : 'auth', loadChildren:() =>
      import('./authentification/authentification.module').then(
        (m) => m.AuthentificationModule
      )
  },
  {
    path: '', redirectTo: 'auth', pathMatch:'full'
  },
  {
    path : 'eleve',
    component:NavbarComponent,loadChildren:() =>
      import('./eleve/eleve.module').then(
        (m) => m.EleveModule
      ),
      canActivate: [authGuard, EleveGuard]
  },
  {
    path : 'parent',
    component:NavbarComponent,loadChildren:() =>
      import('./parent/parent.module').then(
        (m) => m.ParentModule
      ),
      canActivate: [authGuard, ParentGuard]
  },
  {
    path : 'enseignant',
    component:NavbarComponent,loadChildren:() =>
      import('./enseignant/enseignant.module').then(
        (m) => m.EnseignantModule
      ),
      canActivate: [authGuard, EnseignantGuard]
  },
  {
    path : 'shared',loadChildren:() =>
      import('./shared/shared.module').then(
        (m) => m.SharedModule
      ),
  },
  {
    path:"dashboard",
    component:FullComponent,
    children: [
      {path:"auth", redirectTo:"/auth", pathMatch:"full"},
      {path:"gestion-paiement", component:GestionPaiementComponent},
      {path:"gestion-type-paiement", component:GestionTypePaiementComponent},
      {path:"gestion-credit", component:GestionCreditComponent},
      {path:"ajout-credit", component:AjoutCreditComponent},

      {path:"enseignants", component:GestionEnseignantsComponent},
      {path:"eleves", component:GestionElevesComponent},
      {path:"parents", component:GestionParentsComponent},
      {path:"actualites", component:GestionActualitesComponent},
      {path:"classes", component:AddClassComponent},

      {path:"reclamations", component:GestionReclamationComponent},
      {path:"discipline", component:GestionDisciplineComponent},
      {path:"home-enseignant", component:HomeEnseignantComponent},
      {path:"home", component:DashboardComponent},
      {path:"salles", component:AddSalleComponent},
      {path:"moyennes-notes/:id", component:HomeMoyenneEtNoteComponent},
      {path:"gestion-menu", component:AcceuilComponent},
      {path:"matieres", component:GestionMatiereComponent},
      {path:"calendrier-examen", component:GestionCalendrierExComponent},
      {path:"emploi-temps", component:GestionEmploiTempsComponent},
      {path:"module", component:GestionModuleComponent},
      {path:"", component:DetailModuleComponent},


    ],
    canActivate: [authGuard, AdminGuard]
  },

  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

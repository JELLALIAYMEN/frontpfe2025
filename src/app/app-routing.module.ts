import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { GestionUtilisateurComponent } from './views/gestion-utilisateur/gestion-utilisateur.component';
import { AddUserComponent } from './views/gestion-utilisateur/add-user/add-user.component';
import { GestionMembresComponent } from './views/gestion-membres/gestion-membres.component';
import { AddMembreComponent } from './views/gestion-membres/add-membre/add-membre.component';
import { GestionJoueurComponent } from './views/gestion-joueur/gestion-joueur.component';
import { AddJoueurComponent } from './views/gestion-joueur/add-joueur/add-joueur.component';
import { GestionContratComponent } from './views/gestion-contrat/gestion-contrat.component';
import { AddContratComponent } from './views/gestion-contrat/add-contrat/add-contrat.component';
import { GestionPrimeComponent } from './views/gestion-prime/gestion-prime.component';
import { AddPrimeComponent } from './views/gestion-prime/add-prime/add-prime.component';
import { ModifierMembreComponent } from './views/gestion-membres/modifier-membre/modifier-membre.component';
import { ModifierJoueurComponent } from './views/gestion-joueur/modifier-joueur/modifier-joueur.component';
import { ModifierUserComponent } from './views/gestion-utilisateur/modifier-user/modifier-user.component';
import { GestionDcoumentComponent } from './views/gestion-dcoument/gestion-dcoument.component';
import { AjoutDocComponent } from './views/gestion-dcoument/ajout-doc/ajout-doc.component';
import { DetailComponent } from './views/gestion-dcoument/detail/detail.component';
import { GestionProfilComponent } from './views/gestion-profil/gestion-profil.component';
import { EnvoyerMailComponent } from './views/pages/envoyer-mail/envoyer-mail.component';
import { NouveauPasswordComponent } from './views/pages/nouveau-password/nouveau-password.component';
import { DepartementComponent } from './views/departement/departement.component';
import { AjoutDepartementComponent } from './views/departement/ajout-departement/ajout-departement.component';
import { ModifierComponent } from './views/departement/modifier/modifier.component';
import { GestionSalleComponent } from './views/gestion-salle/gestion-salle.component';
import { AjoutSalleComponent } from './views/gestion-salle/ajout-salle/ajout-salle.component';
import { ModifSalleComponent } from './views/gestion-salle/modif-salle/modif-salle.component';
import { GestionMatiereComponent } from './views/gestion-matiere/gestion-matiere.component';
import { AjoutMatiereComponent } from './views/gestion-matiere/ajout-matiere/ajout-matiere.component';
import { ModifMatiereComponent } from './views/gestion-matiere/modif-matiere/modif-matiere.component';
import { GestionClasseComponent } from './views/gestion-classe/gestion-classe.component';
import { AjoutClasseComponent } from './views/gestion-classe/ajout-classe/ajout-classe.component';
import { ModifClasseComponent } from './views/gestion-classe/modif-classe/modif-classe.component';
import { AffecterComponent } from './views/gestion-utilisateur/affecter/affecter.component';
import { GestionEmploiComponent } from './views/gestion-emploi/gestion-emploi.component';
import { CreerEmploiComponent } from './views/gestion-emploi/creer-emploi/creer-emploi.component';
import { GestionNoteComponent } from './views/gestion-note/gestion-note.component';
import { ListeNoteComponent } from './views/gestion-note/liste-note/liste-note.component';
import { GestionMenuComponent } from './views/gestion-menu/gestion-menu.component';
import { AjoutMenuComponent } from './views/gestion-menu/ajout-menu/ajout-menu.component';
import { ModifMenuComponent } from './views/gestion-menu/modif-menu/modif-menu.component';
import { DemandeMenuComponent } from './views/gestion-menu/demande-menu/demande-menu.component';
import { ReclamationComponent } from './views/reclamation/reclamation.component';
import { AjoutReclamationComponent } from './views/reclamation/ajout-reclamation/ajout-reclamation.component';
import { AjoutCalendrierComponent } from './views/calendrier-examen/ajout-calendrier/ajout-calendrier.component';
import { CalendrierExamenComponent } from './views/calendrier-examen/calendrier-examen.component';
import { GestionCoursComponent } from './views/gestion-cours/gestion-cours.component';
import { AjoutCoursComponent } from './views/gestion-cours/ajout-cours/ajout-cours.component';
import { AjoutMoyenneComponent } from './views/gestion-moyenne/ajout-moyenne/ajout-moyenne.component';
import { GestionMoyenneComponent } from './views/gestion-moyenne/gestion-moyenne.component';
import { AjoutDisciplineComponent } from './views/gestion-discipline/ajout-discipline/ajout-discipline.component';
import { GestionDisciplineComponent } from './views/gestion-discipline/gestion-discipline.component';
import { AjoutPaiementComponent } from './views/gestion-paiement/ajout-paiement/ajout-paiement.component';
import { GestionPaiementComponent } from './views/gestion-paiement/gestion-paiement.component';
import { MesElevesComponent } from './views/mes-eleves/mes-eleves.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path:'gestion-utilisateur',
        component:GestionUtilisateurComponent
      },
      {
        path:'gestion-utilisateur/add',
        component:AddUserComponent
      },
      {
        path:'gestion-utilisateur/modifier',
        component:ModifierUserComponent
      },
      {
        path:'mes-eleves',
        component:MesElevesComponent
      },
      {
        path:'gestion-utilisateur/affecter',
        component:AffecterComponent
      },
      {path:'gestion-cours/add',
      component:AjoutCoursComponent
       },
       {path:'gestion-cours',
       component:GestionCoursComponent
        },
     
       {path:'gestion-calendrier/ajout',
        component:AjoutCalendrierComponent
         },
         {path:'gestion-calendrier',
          component:CalendrierExamenComponent
           },
       {path:'gestion-Emploi',
        component:GestionEmploiComponent
         },
         {path:'gestion-Emploi/add',
          component:CreerEmploiComponent
           },
           {path:'gestion-Note/add',
            component:GestionNoteComponent
             },
             {path:'Reclamation',
              component:ReclamationComponent
               },
               {path:'Reclamation/add',
                component:AjoutReclamationComponent
                 },
                 
             {path:'gestion-Menu',
              component:GestionMenuComponent
               },
               {path:'gestion-Menu/add',
                component:AjoutMenuComponent
                 },
                 {path:'les-demandes',
                  component:DemandeMenuComponent
                   },
                 {path:'gestion-Menu/modif',
                  component:ModifMenuComponent
                   },
             {path:'gestion-Note/all',
              component:ListeNoteComponent
               },
                  {path:'gestion-Moyenne/add',
              component:AjoutMoyenneComponent
               },
               {path:'gestion-Moyenne',
                component:GestionMoyenneComponent
                 },
                 {path:'gestion-Discipline/add',
                  component:AjoutDisciplineComponent
                   },
                   {path:'gestion-Discipline',
                    component:GestionDisciplineComponent
                     },
  
                     {path:'gestion-paiement/add',
                      component:AjoutPaiementComponent
                       },
                       {path:'gestion-paiement',
                        component:GestionPaiementComponent
                         },
      

       {path:'gestion-contrat/add',
       component:AddContratComponent
        },
        {path:'gestion-profil',
        component:GestionProfilComponent
         },
        {path:'gestion-document',
       component:GestionDcoumentComponent
        },
        {path:'gestion-departement',
          component:DepartementComponent
           },
           {path:'ajout-departement',
            component:AjoutDepartementComponent
             },
             {path:'modifier-departement',
              component:ModifierComponent
             },

             {path:'gestion-salle',
              component:GestionSalleComponent
             },
             {path:'ajout-salle',
              component:AjoutSalleComponent
             },
             {path:'modif-salle',
              component:ModifSalleComponent
             },
          {path:'gestion-matiere',component:GestionMatiereComponent},
          {path:'ajout-matiere',component:AjoutMatiereComponent},
          {path:'modif-matiere',component:ModifMatiereComponent},
          
          {path:'gestion-classe',component:GestionClasseComponent},
          {path:'ajout-classe',component:AjoutClasseComponent},
          {path:'modif-classe',component:ModifClasseComponent},
        {
          path:'gestion-document/add',
          component:AjoutDocComponent
        },
        {
          path:'gestion-document/detail',
          component:DetailComponent
        },
      
      
      {path:'gestion-joueur',
      component:GestionJoueurComponent
       },
       {path:'dashbord',
        component:DashboardComponent
         },
       {path:'gestion-joueur/add',
       component:AddJoueurComponent
        },
        {path:'gestion-joueur/modifier',
        component:ModifierJoueurComponent
         },
      {
        path:'gestion-membre',
        component:GestionMembresComponent
      },
      {
        path:'gestion-membre/add',
        component:AddMembreComponent
      },
      {
        path:'gestion-membre/modifier',
        component:ModifierMembreComponent
      },
      {
        path:'gestion-prime',
        component:GestionPrimeComponent
      },
      {
        path:'gestion-prime/add',
        component:AddPrimeComponent
      },
      
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
 
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {path:'envoyer-mail',
    component:EnvoyerMailComponent},
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'nouveau-mp',
    component: NouveauPasswordComponent,

  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

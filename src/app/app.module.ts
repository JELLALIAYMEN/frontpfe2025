import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { GestionUtilisateurComponent } from './views/gestion-utilisateur/gestion-utilisateur.component';
import { HttpClientModule } from '@angular/common/http';
import { DeconnexionComponent } from './views/deconnexion/deconnexion.component';
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
import { GestionProfilComponent } from './views/gestion-profil/gestion-profil.component';
import { ModifierJoueurComponent } from './views/gestion-joueur/modifier-joueur/modifier-joueur.component';
import { ModifierUserComponent } from './views/gestion-utilisateur/modifier-user/modifier-user.component';
import { GestionDcoumentComponent } from './views/gestion-dcoument/gestion-dcoument.component';
import { AjoutDocComponent } from './views/gestion-dcoument/ajout-doc/ajout-doc.component';
import { FileUploadModule } from 'ng2-file-upload';
import { DetailComponent } from './views/gestion-dcoument/detail/detail.component';
import { ClasseComponent } from './views/classe/classe.component';
import { DepartementComponent } from './views/departement/departement.component';
import { MatiereComponent } from './views/matiere/matiere.component';
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
import { CalendrierExamenComponent } from './views/calendrier-examen/calendrier-examen.component';
import { AjoutCalendrierComponent } from './views/calendrier-examen/ajout-calendrier/ajout-calendrier.component';
import { GestionCoursComponent } from './views/gestion-cours/gestion-cours.component';
import { AjoutCoursComponent } from './views/gestion-cours/ajout-cours/ajout-cours.component';
import { GestionMoyenneComponent } from './views/gestion-moyenne/gestion-moyenne.component';
import { AjoutMoyenneComponent } from './views/gestion-moyenne/ajout-moyenne/ajout-moyenne.component';
import { GestionDisciplineComponent } from './views/gestion-discipline/gestion-discipline.component';
import { AjoutDisciplineComponent } from './views/gestion-discipline/ajout-discipline/ajout-discipline.component';
import { GestionPaiementComponent } from './views/gestion-paiement/gestion-paiement.component';
import { AjoutPaiementComponent } from './views/gestion-paiement/ajout-paiement/ajout-paiement.component';
import { MesElevesComponent } from './views/mes-eleves/mes-eleves.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, SidebarComponent, GestionUtilisateurComponent, 
     DeconnexionComponent, AddUserComponent, GestionMembresComponent, AddMembreComponent,
      GestionJoueurComponent, AddJoueurComponent, GestionContratComponent, AddContratComponent, 
      GestionPrimeComponent, AddPrimeComponent, ModifierMembreComponent, GestionProfilComponent,
       ModifierJoueurComponent, ModifierUserComponent, GestionDcoumentComponent, AjoutDocComponent,
        DetailComponent, ClasseComponent, DepartementComponent, MatiereComponent, AjoutDepartementComponent,
         ModifierComponent, GestionSalleComponent, AjoutSalleComponent, ModifSalleComponent,
          GestionMatiereComponent, AjoutMatiereComponent, ModifMatiereComponent, GestionClasseComponent,
           AjoutClasseComponent, ModifClasseComponent, AffecterComponent, GestionEmploiComponent, CreerEmploiComponent, GestionNoteComponent, ListeNoteComponent, GestionMenuComponent, AjoutMenuComponent, ModifMenuComponent, DemandeMenuComponent, ReclamationComponent, AjoutReclamationComponent, CalendrierExamenComponent, AjoutCalendrierComponent, GestionCoursComponent, AjoutCoursComponent, GestionMoyenneComponent, AjoutMoyenneComponent, GestionDisciplineComponent, AjoutDisciplineComponent, GestionPaiementComponent, AjoutPaiementComponent, MesElevesComponent],
  imports: [
    FileUploadModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

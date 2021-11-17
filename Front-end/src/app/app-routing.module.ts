import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeAdministrateurComponent } from './Administrateurs/liste-administrateur/liste-administrateur.component';
import { ProfilComponent } from './Administrateurs/profil/profil.component';
import { AddApprenantComponent } from './Apprenants/add-apprenant/add-apprenant.component';
import { DetailApprenantComponent } from './Apprenants/detail-apprenant/detail-apprenant.component';
import { ListeApprenantsComponent } from './Apprenants/liste-apprenants/liste-apprenants.component';
import { UpdateApprenantComponent } from './Apprenants/update-apprenant/update-apprenant.component';
import { AddFormateurComponent } from './Formateurs/add-formateur/add-formateur.component';
import { DetailFormateurComponent } from './Formateurs/detail-formateur/detail-formateur.component';
import { ListeFormateurComponent } from './Formateurs/liste-formateur/liste-formateur.component';
import { UpdateFormateurComponent } from './Formateurs/update-formateur/update-formateur.component';
import { DetailListePresenceComponent } from './Liste_presence/detail-liste-presence/detail-liste-presence.component';
import { ListePresenceDateComponent } from './Liste_presence/liste-presence-date/liste-presence-date.component';
import { ListePresenceDayComponent } from './Liste_presence/liste-presence-day/liste-presence-day.component';
import { ListePresenceMonthComponent } from './Liste_presence/liste-presence-month/liste-presence-month.component';
import { ListePresenceComponent } from './Liste_presence/liste-presence/liste-presence.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },

  // Route Module Apprenants
  { path: 'apprenants', component: ListeApprenantsComponent },
  { path: 'addApprenant', component: AddApprenantComponent },
  { path: 'apprenants/detailApprenant/:id', component: DetailApprenantComponent },
  { path: 'apprenants/updateApprenant/:id', component: UpdateApprenantComponent },

  // Route Module Formateurs
  { path: 'formateurs', component: ListeFormateurComponent },
  { path: 'addFormateur', component: AddFormateurComponent },
  { path: 'formateurs/detailFormateur/:id', component: DetailFormateurComponent },
  { path: 'formateurs/updateFormateur/:id', component: UpdateFormateurComponent },
  { path: 'profil', component: ProfilComponent },

  // Route Module Administrateurs
  { path: 'admins', component: ListeAdministrateurComponent },

  // Route Module Liste de presences
  { path: 'listes_presence/listePresenceMonth/:id', component: ListePresenceMonthComponent },
  { path: 'listePresenceDay/:id', component: ListePresenceDayComponent },
  { path: 'listePresenceDate/:id', component: ListePresenceDateComponent },
  { path: 'listes_presence', component: ListePresenceComponent },
  { path: 'detailListe_presence/:id', component: DetailListePresenceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

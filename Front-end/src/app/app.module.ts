import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListeApprenantsComponent } from './Apprenants/liste-apprenants/liste-apprenants.component';
import { AddApprenantComponent } from './Apprenants/add-apprenant/add-apprenant.component';
import { DetailApprenantComponent } from './Apprenants/detail-apprenant/detail-apprenant.component';
import { UpdateApprenantComponent } from './Apprenants/update-apprenant/update-apprenant.component';
import { ListeAdministrateurComponent } from './Administrateurs/liste-administrateur/liste-administrateur.component';
import { ListePresenceComponent } from './Liste_presence/liste-presence/liste-presence.component';
import { DetailListePresenceComponent } from './Liste_presence/detail-liste-presence/detail-liste-presence.component';
import { ListePresenceDateComponent } from './Liste_presence/liste-presence-date/liste-presence-date.component';
import { ListePresenceDayComponent } from './Liste_presence/liste-presence-day/liste-presence-day.component';
import { ListePresenceMonthComponent } from './Liste_presence/liste-presence-month/liste-presence-month.component';
import { ListeFormateurComponent } from './Formateurs/liste-formateur/liste-formateur.component';
import { AddFormateurComponent } from './Formateurs/add-formateur/add-formateur.component';
import { UpdateFormateurComponent } from './Formateurs/update-formateur/update-formateur.component';
import { DetailFormateurComponent } from './Formateurs/detail-formateur/detail-formateur.component';
import { ProfilComponent } from './Administrateurs/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    AccueilComponent,
    LoginComponent,
    ListeApprenantsComponent,
    AddApprenantComponent,
    DetailApprenantComponent,
    UpdateApprenantComponent,
    ListeAdministrateurComponent,
    ListePresenceComponent,
    DetailListePresenceComponent,
    ListePresenceDateComponent,
    ListePresenceDayComponent,
    ListePresenceMonthComponent,
    ListeFormateurComponent,
    AddFormateurComponent,
    UpdateFormateurComponent,
    DetailFormateurComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

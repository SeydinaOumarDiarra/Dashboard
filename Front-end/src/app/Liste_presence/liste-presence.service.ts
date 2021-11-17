import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListePresenceService {

  private url = environment.BASE_URL;
  
  constructor(
    private http: HttpClient,
  ) { }

  ajoutListe_presence(liste: any){
    return this.http.post(this.url + '/liste_presence/addListe_presence', liste);
  }

  detailListePresence(id: any){
    return this.http.get(this.url + `/liste_presence/detailListe_presence/${id}`);
  }

  listePresenceParAn(){
    return this.http.get(this.url + `/liste_presence/liste_presence_by_Year`);
  }

  listePresenceParMois(year: any){
    return this.http.get(this.url + `/liste_presence/liste_presence_by_Month/${year}`);
  }

  listePresenceParDate(month: any){
    return this.http.get(this.url + `/liste_presence/liste_presence_by_Date/${month}`);
  }

  listePresenceParDay(day: any){
    return this.http.get(this.url + `/liste_presence/liste_presence_by_Day/${day}`);
  }
}

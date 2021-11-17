import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormateurServiceService {

  private url = environment.BASE_URL;

  constructor(
    private http: HttpClient,
  ) { }

  listeFormateur(){
    return this.http.get(this.url + '/formateur/listFormateur');
  }

  ajoutFormateur(app: any){
    return this.http.post(this.url + '/formateur/addFormateur', app);
  }

  detailFormateur(id: any){
    return this.http.get(this.url + `/formateur/detailFormateur/${id}`);
  }

  updateFormateur(id: any, app: any){
    return this.http.put(this.url + `/formateur/updateFormateur/${id}`, app);
  }

  deleteFormateur(id: any): Observable<Object>{
    return this.http.delete(this.url + `/formateur/deleteFormateur/${id}`);
  }
}

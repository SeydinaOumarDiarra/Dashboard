import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private url = environment.BASE_URL;
  constructor(
    private http: HttpClient,
  ) { }

  listeApprenant(){
    return this.http.get(this.url + '/apprenant/listApprenant');
  }

  ajoutApprenant(app: any){
    return this.http.post(this.url + '/apprenant/addApprenant', app);
  }

  detailApprenant(id: any){
    return this.http.get(this.url + `/apprenant/detailApprenant/${id}`);
  }

  updateApprenant(id: any, app: any){
    return this.http.put(this.url + `/apprenant/updateApprenant/${id}`, app);
  }

  deleteApprenant(id: any): Observable<Object>{
    return this.http.delete(this.url + `/apprenant/deleteApprenant/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private url = environment.BASE_URL;

  constructor(
    public http: HttpClient,
  ) { }

  connexion(login: String, password: String){
    return this.http.get(this.url + '/admin/connexion/' + login + '/' + password);
  }

  listeAdmin(){
    return this.http.get(this.url + '/admin/listAdmin');
  }
}

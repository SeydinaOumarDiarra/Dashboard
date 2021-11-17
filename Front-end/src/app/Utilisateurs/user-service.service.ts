import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = environment.BASE_URL;
  constructor(
    private http: HttpClient,
  ) { }

  ajoutUser(app: any){
    return this.http.post(this.url + '/user/addUser', app);
  }

  detailUser(id: any){
    return this.http.get(this.url + `/user/detailUser/${id}`);
  }

  updateUser(id: any, user: any): Observable<Object>{
    return this.http.put(this.url + `/user/updateUser/${id}`, user);
  }

  deleteUser(idUser: any): Observable<Object>{
    return this.http.delete(this.url + `/user/deleteUser/${idUser}`);
  }
}

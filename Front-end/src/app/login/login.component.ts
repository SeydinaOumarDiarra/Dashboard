import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../Administrateurs/Services/admin-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminUser: any;
  idAd: any;
  roleAd: any;
  admin: any;

  constructor(
    public service: AdminServiceService,
    public router: Router
  ) {
    localStorage.clear;
    localStorage.removeItem("username");
   }

  ngOnInit(): void {
  }


  onLogin(form: NgForm) {
    this.service.connexion(form.value["username"], form.value["password"]).subscribe((res:any)=>{

      console.log("===================="+res);

      localStorage.setItem("admin", res);
      localStorage.setItem("user", res.user);
      localStorage.setItem("role", res.role);
      localStorage.setItem("idUser", res.user.id);
      localStorage.setItem("username", res.user.login);
      localStorage.setItem("nom", res.user.nom);
      localStorage.setItem("prenom", res.user.prenom);
      localStorage.setItem("genre", res.user.genre);
      localStorage.setItem("telephone", res.user.telephone);
      localStorage.setItem("email", res.user.email);
      this.router.navigate(['accueil']);
    });
}

}

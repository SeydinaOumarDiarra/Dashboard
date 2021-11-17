import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  profil: any;
  login: any;
  nom: any;
  prenom: any;
  genre: any;
  tel: any;
  email: any;
  constructor() { }

  ngOnInit(): void {
     this.profil = localStorage.getItem("user");
     this.login = localStorage.getItem("username");
     this.nom = localStorage.getItem("nom");
     this.prenom = localStorage.getItem("prenom");
     this. genre = localStorage.getItem("genre");
     this.tel = localStorage.getItem("telephone");
     this.email = localStorage.getItem("email");
  }

}

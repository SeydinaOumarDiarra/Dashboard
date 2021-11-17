import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Entity/Admin';
import { ListePresenceService } from '../liste-presence.service';

@Component({
  selector: 'app-liste-presence',
  templateUrl: './liste-presence.component.html',
  styleUrls: ['./liste-presence.component.scss']
})
export class ListePresenceComponent implements OnInit {

  liste: any;
  listePresence: any;
  admincontent = new Admin();
  id: any;
  constructor(
    public service: ListePresenceService,
    public router: Router,
  ) { 
    
  }

  ngOnInit(): void {
    this.listePresenceParAn();
  }

  addListe_presence(){

    this.admincontent.id = localStorage.getItem("idUser");
    this.admincontent.role = localStorage.getItem("role");
    this.liste = {"date_liste": new Date(), "admin": this.admincontent};
    this.service.ajoutListe_presence(this.liste).subscribe((data: any) =>{
      this.id  = data.id;
    this.router.navigate(['detailListe_presence', this.id]);
    })
  }


  listePresenceParAn(){
    this.service.listePresenceParAn().subscribe(data =>{
      this.listePresence = data;
      console.log( this.listePresence);
    })
  }

}

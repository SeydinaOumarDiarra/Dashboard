import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/Apprenants/app-service.service';
import { Admin } from 'src/app/Entity/Admin';
import { ListeP } from 'src/app/Entity/ListePresence';
import { ListePresenceService } from '../liste-presence.service';

@Component({
  selector: 'app-detail-liste-presence',
  templateUrl: './detail-liste-presence.component.html',
  styleUrls: ['./detail-liste-presence.component.scss']
})
export class DetailListePresenceComponent implements OnInit {

  id: any;
  liste: any;
  listeApp: any;
  tabApprenant: any = [];
  listePresence: any;
  admincontent = new Admin();

  constructor(
    public service: ListePresenceService,
    public serviceApp: AppServiceService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     this.service.detailListePresence(this.id).subscribe(data =>{
       this.liste = data;
       console.log("liste============",data)
     });
    this.listeapprenants();
    this.tabApprenant;
  }

  async listeapprenants() {
    this.serviceApp.listeApprenant().subscribe((res:any)=>{
      this.listeApp = res;
      console.log(this.listeApp);
     // this.router.navigate(['apprenants']);
    });
  }

  voir(index: any){
     this.tabApprenant.push(index);
     console.log(this.tabApprenant);
  }

  addListe(form: any){
    console.log("formm========= "+this.tabApprenant);


    for(let i = 0; i<this.tabApprenant.length; i ++){

      this.listePresence = new ListeP()
      this.listePresence.id = this.tabApprenant[i].id;
      this.listePresence.date_liste = new Date();
      this.listePresence.heure_arrive = new Date().getHours()+ ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
      this.listePresence.app = this.tabApprenant[i];
      this.listePresence.admin = this.tabApprenant[i].admin;

      this.service.ajoutListe_presence(this.listePresence).subscribe((data: any) =>{
        this.id  = data.id;
      this.router.navigate(['detailListe_presence', this.id]);
      })
      console.log("formm========= ");
    }
    //console.log(this.listeApp[0]);
  }

}

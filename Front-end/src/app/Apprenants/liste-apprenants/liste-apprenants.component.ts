import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/Utilisateurs/user-service.service';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-liste-apprenants',
  templateUrl: './liste-apprenants.component.html',
  styleUrls: ['./liste-apprenants.component.scss']
})
export class ListeApprenantsComponent implements OnInit {

  listeApp : any;
  id: any;
  apprenant: any;
  appHomme: any = [];
  appFemme: any = [];
  countappHomme = 0;
  countappFemme = 0;
  countApp = 0;

  constructor(
    public service: AppServiceService,
    public serviceUser: UserServiceService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.listeapprenants();
    this.countApp;
    this.countappFemme;
    this.countappHomme;
  }

  async listeapprenants() {
    this.service.listeApprenant().subscribe((res:any)=>{
      this.listeApp = res;
      this.countApp = this.listeApp.length;
      for (let i = 0; i< this.listeApp.length; i ++){
        if(this.listeApp[i].user.genre == "Homme"){
            this.appHomme.push(this.listeApp);
        }else if (this.listeApp[i].user.genre == "Femme"){
            this.appFemme.push(this.listeApp);
        }
      }
      this.countappHomme = this.appHomme.length;
      this.countappFemme = this.appFemme.length;
      this.router.navigate(['apprenants']);
    });
  }

  deleteApp(id: any){

    this.id = id;
    this.service.detailApprenant(this.id).subscribe(data =>{
      this.apprenant = data;
      console.log(this.apprenant.user.id);
      this.service.deleteApprenant(this.apprenant.id).subscribe(data => {
        this.serviceUser.deleteUser(this.apprenant.user.id);
        this.router.navigate(['apprenants']);
      })
    })
  }

}

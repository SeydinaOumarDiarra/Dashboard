import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-liste-administrateur',
  templateUrl: './liste-administrateur.component.html',
  styleUrls: ['./liste-administrateur.component.scss']
})
export class ListeAdministrateurComponent implements OnInit {

  listeApp: any;

  constructor(
    public service: AdminServiceService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.listeadmins();
  }

  async listeadmins() {
    this.service.listeAdmin().subscribe((res:any)=>{
      this.listeApp = res;
      console.log(this.listeApp);
      this.router.navigate(['admins']);
    });
}

}

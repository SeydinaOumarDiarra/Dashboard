import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Entity/Admin';
import { User } from 'src/app/Entity/User';
import { UserServiceService } from 'src/app/Utilisateurs/user-service.service';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.scss']
})
export class AddApprenantComponent implements OnInit {

  user : any;
  idUser: any;
  apprenant: any;
  admin: any;
  nadd: any;
  admincontent = new Admin();
  utilisateur = new User();
  
  constructor(
    public service: AppServiceService,
    public serviceUser: UserServiceService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  onRegister(form: NgForm){
    console.log(form.value);
    this.serviceUser.ajoutUser(form.value).subscribe((util: any)=>{

      this.admincontent.id = localStorage.getItem("idUser");
      this.admincontent.role = localStorage.getItem("role");
      this.admincontent.user = util;

      console.log(this.admincontent);
      this.apprenant = {"dateAdd" : new Date(), "dateUpdate" : new Date(), "admin": this.admincontent,  "user": util};
      this.service.ajoutApprenant(this.apprenant).subscribe((app : any)=>{
        console.log(app);
        this.router.navigate(['apprenants'])
      });

    })
  }

}

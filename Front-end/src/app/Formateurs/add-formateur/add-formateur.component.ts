import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Entity/Admin';
import { User } from 'src/app/Entity/User';
import { UserServiceService } from 'src/app/Utilisateurs/user-service.service';
import { FormateurServiceService } from '../Services/formateur-service.service';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.scss']
})
export class AddFormateurComponent implements OnInit {

  user : any;
  idUser: any;
  formateur: any;
  admin: any;
  nadd: any;
  admincontent = new Admin();
  utilisateur = new User();

  constructor(
    public service: FormateurServiceService,
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
      this.formateur = {"dateAdd" : new Date(), "dateUpdate" : new Date(), "admin": this.admincontent,  "user": util};
      this.service.ajoutFormateur(this.formateur).subscribe((app : any)=>{
        console.log(app);
        this.router.navigate(['formateurs'])
      });

    })
  }

}

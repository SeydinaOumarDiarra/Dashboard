import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/Utilisateurs/user-service.service';
import { FormateurServiceService } from '../Services/formateur-service.service';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.scss']
})
export class UpdateFormateurComponent implements OnInit {

  id: any;
  formateur: any;
  user: any;
  constructor(
    public service: FormateurServiceService,
    public serviceUser: UserServiceService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailFormateur(this.id).subscribe(data =>{
    this.formateur = data;      
    })
  }

  onUpdate(){
    this.serviceUser.updateUser(this.formateur.user.id, this.formateur.user).subscribe(data1=>{
      this.formateur.dateUpdate = new Date();
      this.service.updateFormateur(this.id, this.formateur).subscribe((data: any)=>{
        console.log("formateur Modifié : "+data);
        this.router.navigate(['formateurs']);
      }, error => console.error(error));
    })
  }

}

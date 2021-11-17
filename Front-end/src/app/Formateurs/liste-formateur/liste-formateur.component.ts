import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/Utilisateurs/user-service.service';
import { FormateurServiceService } from '../Services/formateur-service.service';

@Component({
  selector: 'app-liste-formateur',
  templateUrl: './liste-formateur.component.html',
  styleUrls: ['./liste-formateur.component.scss']
})
export class ListeFormateurComponent implements OnInit {

  listeForm : any;
  id: any;
  formateur: any;
  formHomme: any = [];
  formFemme: any = [];
  countformHomme = 0;
  countformFemme = 0;
  countForm = 0;

  constructor(
    public service: FormateurServiceService,
    public serviceUser: UserServiceService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.listeformateurs();
    this.countForm;
    this.countformFemme;
    this.countformHomme;
  }

  async listeformateurs() {
    this.service.listeFormateur().subscribe((res:any)=>{
      this.listeForm = res;
      this.countForm = this.listeForm.length;
      for (let i = 0; i< this.listeForm.length; i ++){
        if(this.listeForm[i].user.genre == "Homme"){
            this.formHomme.push(this.listeForm);
        }else if (this.listeForm[i].user.genre == "Femme"){
            this.formFemme.push(this.listeForm);
        }
      }
      this.countformHomme = this.formHomme.length;
      this.countformFemme = this.formFemme.length;
      this.router.navigate(['formateurs']);
    });
  }

  deleteForm(id: any){
    this.id = id;
    this.service.detailFormateur(this.id).subscribe(data =>{
      this.formateur = data;
      console.log(this.formateur.user.id);
      this.service.deleteFormateur(this.formateur.id).subscribe(data => {
        this.serviceUser.deleteUser(this.formateur.user.id);
        this.router.navigate(['formateurs']);
      })
    })
  }

}

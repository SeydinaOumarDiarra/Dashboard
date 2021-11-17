import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurServiceService } from '../Services/formateur-service.service';

@Component({
  selector: 'app-detail-formateur',
  templateUrl: './detail-formateur.component.html',
  styleUrls: ['./detail-formateur.component.scss']
})
export class DetailFormateurComponent implements OnInit {

  id: any;
  formateur: any;

  constructor(
    public service: FormateurServiceService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];  
    this.service.detailFormateur(this.id).subscribe(data =>{
    this.formateur = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-detail-apprenant',
  templateUrl: './detail-apprenant.component.html',
  styleUrls: ['./detail-apprenant.component.scss']
})
export class DetailApprenantComponent implements OnInit {

  id: any;
  apprenant: any;
  constructor(
    public service: AppServiceService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];  
    this.service.detailApprenant(this.id).subscribe(data =>{
    this.apprenant = data;
    })
  }

}

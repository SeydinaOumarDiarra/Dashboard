import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListePresenceService } from '../liste-presence.service';

@Component({
  selector: 'app-liste-presence-month',
  templateUrl: './liste-presence-month.component.html',
  styleUrls: ['./liste-presence-month.component.scss']
})
export class ListePresenceMonthComponent implements OnInit {

  year: any;
  listePresence: any;

  constructor(
    public service: ListePresenceService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.year = this.route.snapshot.params['id'];
    console.log("aneeeeeeeeeee==========",this.year)
   }

  ngOnInit(): void {
    console.log(this.year);
    this.getMonths(this.year);
  }

  getMonths(years: any){
    years =  this.year;
    this.service.listePresenceParMois(years).subscribe(data =>{
      this.listePresence = data;
      console.log("-------------" + this.listePresence);
     // this.router.navigate(['listePresenceDay', years]);

    })
  }

}

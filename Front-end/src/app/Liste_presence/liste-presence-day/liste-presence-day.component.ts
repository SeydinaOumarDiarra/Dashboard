import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListePresenceService } from '../liste-presence.service';

@Component({
  selector: 'app-liste-presence-day',
  templateUrl: './liste-presence-day.component.html',
  styleUrls: ['./liste-presence-day.component.scss']
})
export class ListePresenceDayComponent implements OnInit {

  month: any;
  listePresence: any;

  constructor(
    public service: ListePresenceService,
    public router: Router,
    public route: ActivatedRoute
  ) { 
    this.month = this.route.snapshot.params['id'];
    console.log("aneeeeeeeeeee==========",this.month)
  }

  ngOnInit(): void {
    console.log(this.month);
    this.getDays(this.month);
  }
  
  getDays(months: any){
    months =  this.month;
    this.service.listePresenceParDate(months).subscribe(data =>{
      this.listePresence = data;
      console.log("-------------" + this.listePresence);
    })
  }

}

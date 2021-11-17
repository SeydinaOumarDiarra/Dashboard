import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListePresenceService } from '../liste-presence.service';

@Component({
  selector: 'app-liste-presence-date',
  templateUrl: './liste-presence-date.component.html',
  styleUrls: ['./liste-presence-date.component.scss']
})
export class ListePresenceDateComponent implements OnInit {

  day: any;
  listePresence: any

  constructor(
    public service: ListePresenceService,
    public router: Router,
    public route: ActivatedRoute
  ) { 
    this.day = this.route.snapshot.params['id'];
    console.log("aneeeeeeeeeee==========",this.day)
  }

  ngOnInit(): void {
    this.getDays(this.day);
  }

  getDays(days: any){
    days =  this.day;
    this.service.listePresenceParDay(days).subscribe(data =>{
      this.listePresence = data;
      console.log("-------------" + this.listePresence);
    })
  }

}

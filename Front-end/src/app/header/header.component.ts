import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor() { 
    this.user = localStorage.getItem("username");
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}

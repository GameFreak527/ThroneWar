import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.css']
})
export class BattlegroundComponent implements OnInit {
  title : string;
  constructor(private route : ActivatedRoute,
    router : Router) { }

  ngOnInit() {
    this.title =  this.route.snapshot.data.title;
  }

}

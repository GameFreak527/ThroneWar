import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { News } from 'src/app/model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
   title : string;
   news : News;

  constructor(private route:ActivatedRoute,
    private authService : AuthService) { }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    this.news = new News();
  }

  isLoggedIn():boolean{
    return this.authService.loggedIn();
  }

  onSaveClick(){
    console.log("Save Clicked");
  }

  onClearClick(){
    console.log("Clear Clicked");
  }

}

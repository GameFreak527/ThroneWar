import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Thread } from 'src/app/model/thread';
import { DisucssionService } from 'src/app/services/disucssion.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
   title : string;
   thread : Thread[];
 

  constructor(private actiavateRoute: ActivatedRoute,
    private router: Router,
    private authService : AuthService,
    private discussionService : DisucssionService) { 
    }

  ngOnInit() {
    this.title = this.actiavateRoute.snapshot.data.title;
    this.thread = new Array<Thread>();

    this.onLoad();
  }

  isLoggedIn():boolean{
    return this.authService.loggedIn();
  }

  onLoad():void{
    
    this.discussionService.getAllThread().subscribe(data =>{
        this.thread = data.threadList;
    });
  }



}

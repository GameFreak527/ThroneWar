import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Thread } from 'src/app/model/thread';

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
    private authService : AuthService) { 
    }

  ngOnInit() {
    this.title = this.actiavateRoute.snapshot.data.title;
    this.thread = new Array<Thread>();
  }

  isLoggedIn():boolean{
    return this.authService.loggedIn();
  }


}

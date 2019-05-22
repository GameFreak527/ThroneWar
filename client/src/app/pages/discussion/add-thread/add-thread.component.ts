import { Component, OnInit } from '@angular/core';
import { Thread } from 'src/app/model/thread';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { DisucssionService } from 'src/app/services/disucssion.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-thread',
  templateUrl: './add-thread.component.html',
  styleUrls: ['./add-thread.component.css']
})
export class AddThreadComponent implements OnInit {
  title : string;
  thread : Thread;
  user: User;

  constructor(private activatedRoute : ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private discussionService : DisucssionService) {
    this.thread = new Thread();
    this.title = this.activatedRoute.snapshot.data.title;
    this.user = new User();
   }

  ngOnInit() {
  }

  onSubmitClick():void{
    //Getting user information from local storage
    this.user = JSON.parse(localStorage.getItem('user'));

    //putting user information into the thread
    this.thread.userId = (JSON.parse(localStorage.getItem('user'))["id"]);
    this.thread.userName = this.user.username;

    this.discussionService.addThread(this.thread).subscribe(data=>{
      if(data.success){
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/discussion']);
      }
      else{
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/discussion']);
      }
    })
  }

}

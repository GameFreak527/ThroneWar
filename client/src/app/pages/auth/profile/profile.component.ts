import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title : string;
  character : Character;
  user : User;
  userId : string;

  constructor(private activatedRoute: ActivatedRoute,
    private userService : UserService) {
    this.user = new User();
    this.character = new Character();
   }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    //getting userId from param
    this.activatedRoute.params.subscribe(params=>{
      this.userId = params.id;
    });

    //Getting user from the localStorage
      this.user = JSON.parse(localStorage.getItem('user'));
    
  }

}

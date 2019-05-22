import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  constructor(private userService : UserService) {
    this.userService.getCharacterList().subscribe(data=>{
      if(data.success){
        console.log(data);
      }
      else{
        console.log("Failed");
      }
    });
   
  }

  ngOnInit() {
    
  }

}

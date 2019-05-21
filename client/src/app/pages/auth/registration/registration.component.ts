import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   user : User;
  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) {
   }

  ngOnInit() {
    this.user = new User();
  }

  onRegisterSubmit(){
    this.authService.registerUser(this.user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You are now registered and may log in', {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('A registration Error Occurred', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/registeration']);
      }
    });
  }

}

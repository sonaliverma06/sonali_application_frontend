import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private appService:AppService){
    this.appService.seeHeaderChanging(false)
  }
}

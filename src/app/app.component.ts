import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sonali_app';
  showHeader: boolean=false;

  constructor(private route: ActivatedRoute, private appService:AppService) {}

  ngOnInit():void {
    this.appService.headerhide$.subscribe((res:any) => {
      this.showHeader= res
    })
  }
}

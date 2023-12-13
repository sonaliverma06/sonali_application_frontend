import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  constructor(
    private appservice: AppService,
    private router: Router,
    private route: ActivatedRoute,
   
  ) {
    this.appservice.seeHeaderChanging(true);
  }
}

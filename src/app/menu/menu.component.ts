import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  arrayData: any[] = [];
  categoryData: any[] = [];
  mixCategories: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appservice: AppService
  ) {
    this.appservice.seeHeaderChanging(true);
  }

  ngOnInit() {
    this.getproductdata();
    this.getcategoriesdata();
  }
  getcategoriesdata() {
    this.appservice.getcategories().subscribe({
      next: (res) => {
        this.categoryData = res;
        // console.log('this.arrayData', this.categoryData);
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  getproductdata() {
    this.appservice.getproduct().subscribe({
      next: (res) => {
        // console.log('res', res);
        this.arrayData = res;
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.arrayData.length) {
      this.currentPage++;
    }
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.arrayData.slice(startIndex, endIndex);
  }
}

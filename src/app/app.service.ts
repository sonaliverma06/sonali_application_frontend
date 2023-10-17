import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public headerhide:any;
  public headerhide$:any;
  constructor() { 
    this.headerhide= new BehaviorSubject<boolean>(false);
    this.headerhide$ = this.headerhide.asObservable()
  }

  public seeHeaderChanging(a:boolean):void{
    this.headerhide.next(a)
  }
}

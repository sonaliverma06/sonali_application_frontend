import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,

} from "@angular/common/http";
@Injectable({
  providedIn: 'root',
})
export class AppService {
  public headerhide: any;
  public headerhide$: any;
  constructor(private http: HttpClient) {
    this.headerhide = new BehaviorSubject<boolean>(false);
    this.headerhide$ = this.headerhide.asObservable();
  }

  public seeHeaderChanging(a: boolean): void {
    this.headerhide.next(a);
  }

  public addregister(data: any): Observable<any> {
    return this.http
      .post('http://localhost:3000/users/register/user', data)
      .pipe(catchError(this.HandleError));
  }
  private HandleError(error: HttpErrorResponse): any {
    return throwError(() => error);
  }

  public loginuser(data: any): Observable<any> {
    return this.http
      .post('http://localhost:3000/users/login', data)
      .pipe(catchError(this.HandleError));
  }
  public getproduct(): Observable<any> {
    return this.http
      .get('http://localhost:3000/product')
      .pipe(catchError(this.HandleError));
  }
  public postproduct(data:any): Observable<any> {
    return this.http
      .post('http://localhost:3000/product',data)
      .pipe(catchError(this.HandleError));
  }
}



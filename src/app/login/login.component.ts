import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private appService: AppService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.appService.seeHeaderChanging(false);
  }
  loginForm!: FormGroup;
  ngOnInit() {
    this.loginformvalidation();
  }
  get f() {
    return this.loginForm.controls;
  }
  loginformvalidation() {
    this.loginForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(300),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(300),
        ]),
      ],
    });
  }
  loginsubmit(){
    const loginvalue = {
  email: this.f["email"].value,
  password: this.f["password"].value
    }
    console.log('loginvalue', loginvalue);
    
    this.appService.loginuser(loginvalue).subscribe({
      next: (res)=>{
        let a = res.token;
        console.log("res",a);

         localStorage.setItem('token', a);

         if (!a) {
           this.router.navigate(['/']);
         } else {
           this.router.navigate(['/home']);
         }
        
      },
     error:(err)=>{
      console.log("err",err);
      
     }
      
    })

  }
      
    }

  


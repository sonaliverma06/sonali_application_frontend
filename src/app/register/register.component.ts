import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private route: ActivatedRoute,
    private appservice: AppService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  registerForm!: FormGroup;
  ngOnInit() {
    this.initForm();
    console.log('this.registerForm', this.f);
  }
  get f() {
    return this.registerForm.controls;
  }
  initForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      contact: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(300),
          Validators.minLength(5),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
          Validators.pattern(
            '^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$'
          ),
        ]),
      ],
    });
  }
  registersubmit() {
    const registervalue = {
      name: this.f['name'].value,
      state: this.f['state'].value,
      city: this.f['city'].value,
      address: this.f['address'].value,
      email: this.f['email'].value,
      contact_number: this.f['contact'].value,
      gender: this.f['gender'].value,
      password: this.f['password'].value,
      user_role: 'user',
    };
    console.log('registervalue', registervalue);
    
    this.appservice.addregister(registervalue).subscribe({
      next: (res)=>{
        console.log(res,"res");
         },
        error:(err)=>{
          console.log('err',err);
          
        }
         
    })
  }
}

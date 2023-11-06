import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private appservice:AppService, private router:Router, private route:ActivatedRoute, private fb: FormBuilder){
      this.appservice.seeHeaderChanging(true);
  }
productForm!:FormGroup;
ngOnInit(){
this.initForm();
}
initForm(){
   this.productForm = this.fb.group({
     name: ['', Validators.compose([Validators.required])],
     image: ['', Validators.compose([Validators.required])],
     price: ['', Validators.compose([Validators.required])],
    
   });

}
get f(){
  return this.productForm.controls;
}
productsubmit(){
  const productdata = {
    name: this.f['name'].value,
    image: this.f['image'].value,
    price: this.f['price'].value,
  };
  console.log('productdata', productdata);
  
  this.appservice.postproduct(productdata).subscribe({
    next:(res)=>{
      console.log("res",res);
      
    },
    error:(err)=>{
      console.log("err",err);
      
    }
  })
}
}

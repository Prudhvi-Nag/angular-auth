import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  formsignup:FormGroup;

  constructor(private authservice:AuthServiceService ,private router:Router,private _fb: FormBuilder,){ 
    this.formsignup=this._fb.group({
      name:"",
      email:"",
      password:""

    })
  }

 ngOnInit(){


 }


 onSubmit(){
  if(this.formsignup.valid){
    this.authservice.signup(this.formsignup.value).subscribe(res => {
      if(res){
        console.log(res);
        console.log("account signup completed")
        
        this.router.navigate(['login']);
      }else{
        console.log("error to signup")
      }
    })
  }

}
}

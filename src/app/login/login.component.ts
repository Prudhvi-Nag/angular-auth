import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { FormGroup,FormControl,FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  formlog: FormGroup;
  
  
  

  constructor(private authservice:AuthServiceService ,private router:Router,private _fb: FormBuilder,){ 
    this.formlog=this._fb.group({
     
      email:"",
      password:""

    })
  }

 ngOnInit(){}
 onSubmit(){
  if(this.formlog.valid){
    this.authservice.login(this.formlog.value).subscribe(res => {
      if(res){
        localStorage.setItem('token',res.token)
        console.log(res);
        console.log("login successfull and page navigate  to dashboard ")
        this.router.navigate(['/dashboard']);
      }else{
        console.log("error to login");
      }
    })
  }
 }
 
}



import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { LogService } from '../log.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerError:string=''
  constructor(private _LogService:LogService , private _Router:Router) { }
register= new FormGroup({
  first_name:new FormControl(null , [Validators.required  ,  Validators.maxLength(10),Validators.minLength(3)]),
  last_name:new FormControl(null , [Validators.required  ,  Validators.maxLength(10),Validators.minLength(3)]),
  email:new FormControl(null , [Validators.required  , Validators.email]),
  password:new FormControl(null , [Validators.required ]  ),
  age:new FormControl(null , [Validators.required  ,Validators.max(60),Validators.min(18)])
})
registSubmit(registerValue:FormGroup)
{
this._LogService.checkRegist(registerValue.value).subscribe({
  next: (Response)=>{
    if(Response.message == "success"){
this._Router.navigate(['/login'])

    } else
    {
      this.registerError= Response.errors.email.message
    }
    
  } 
})
}
  ngOnInit(): void {
    localStorage.setItem('currentPage','register')
  }

}
 
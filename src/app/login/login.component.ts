import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { LogService } from '../log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email] ) , 
    password:new FormControl(null , [Validators.required] )  
  })
  constructor(private _LogService:LogService , private _Router:Router) { }
  loginError:string=''
loginSubmit(loginform:FormGroup)
{
  this._LogService.checkLogin(loginform.value).subscribe({
    next:(Response)=>{
      if (Response.message == "success"){
                //succes >>> nav to home 
this._Router.navigate(['/home'])
            //token >> 1 store it
            localStorage.setItem('userToken',Response.token)
        //2 decode it
        this._LogService.decode()
        
        
      
    
        
      } else
      {
        this.loginError= Response.message
      }
    }
  })
}
  ngOnInit(): void {
    localStorage.setItem('currentPage' , 'login')
  }

}

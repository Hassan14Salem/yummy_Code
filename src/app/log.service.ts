import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

export interface RegisterObj {
  first_name:string;
  last_name:string;
  email:string;
  password:number;
  age:number;
    
}
@Injectable({
  providedIn: 'root'
})

export class LogService {

decodeData= new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if ( localStorage.getItem('userToken') != null ){
      //on Refresh nav to current page with another steps in comp. onInit (  عشان ميرجعش من الاول تاني    )
      this._Router.navigate([`${localStorage.getItem('currentPage')}`]) 
      this.decode()
    
    }
   }
  
  checkRegist(registVal:RegisterObj):Observable<any>
  {
    return this._HttpClient.post('https://route-movies-api.vercel.app/signup',registVal)
  }
  checkLogin(loginVal:RegisterObj):Observable<any>
  {
    return this._HttpClient.post('https://route-movies-api.vercel.app/signin',loginVal)
  }
  decode()
  {
    return this.decodeData.next(jwtDecode(JSON.stringify(localStorage.getItem("userToken")))) 
    
  }
}

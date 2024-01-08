import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../log.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
islogging:boolean=false;
logOut()
{
  //removeLocalStorage
  localStorage.removeItem('userToken')
  //nav to login
this._Router.navigate(['/login'])
// make decodedata var = null 
this._LogService.decodeData.next(null)
}
  constructor(private _LogService:LogService  , private _Router:Router) { }

  ngOnInit(): void {
    this._LogService.decodeData.subscribe({
      next:()=>{
        if ( this._LogService.decodeData.getValue() != null    ){
          this.islogging = true ;
        } else
        {
          this.islogging=false;
        }
      }
    })
   
  }

}

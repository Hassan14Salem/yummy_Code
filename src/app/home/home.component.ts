import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '../fetch-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeMeals:any[]=[]
  loadingFlag:boolean=false
  constructor(private _FetchApiService:FetchApiService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage','home')
    this.loadingFlag=true
    this._FetchApiService.getMeal('s','').subscribe({
      
      next:(Response)=>{
this.homeMeals = Response.meals ; 
this.loadingFlag=false
console.log(Response)
      }
    })

  }

}

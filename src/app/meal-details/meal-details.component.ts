import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchApiService } from '../fetch-api.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent implements OnInit {
loadingFlag:boolean=false;
  constructor(private _FetchApiService:FetchApiService , private _ActivatedRoute:ActivatedRoute) { }
idBox:any;
  ngOnInit(): void {
    this.loadingFlag=true;
    let {id}= this._ActivatedRoute.snapshot.params;
    this._FetchApiService.getMealById(id).subscribe({
      next:(Response)=>{
        this.idBox=Response.meals;
        this.loadingFlag=false;
      }
    })
    localStorage.setItem('currentPage',`mealdetails/${id}`)
  }

}

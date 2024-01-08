import { Component, OnInit } from '@angular/core';
import { CIAService } from '../cia.service';

@Component({
  selector: 'app-ingrediants',
  templateUrl: './ingrediants.component.html',
  styleUrls: ['./ingrediants.component.scss']
})
export class IngrediantsComponent implements OnInit {
iMeals:any[]=[]
loadingFlag:boolean=false;
  constructor(private _CIAService:CIAService) { }

  ngOnInit(): void {
    this.loadingFlag=true;
    localStorage.setItem('currentPage','ingrediants')
this._CIAService.getMealDetails('i').subscribe({
  next:(Response)=>{
    this.iMeals = Response.meals;
    this.loadingFlag=false;
  }
})
  }

}

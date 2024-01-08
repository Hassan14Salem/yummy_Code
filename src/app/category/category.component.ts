import { Component, OnInit } from '@angular/core';
import { CIAService } from '../cia.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
categoryMeals:any[]=[]
loadingFlag:boolean=false
  constructor(private _CIAService:CIAService) { }

  ngOnInit(): void {
    this.loadingFlag=true;
    localStorage.setItem('currentPage','category')
    this._CIAService.category().subscribe({
      next:(Response)=>{
        this.categoryMeals = Response.categories
        this.loadingFlag=false
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FetchApiService } from '../fetch-api.service';
declare var $:any ;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchByName:string=''
searchByLetter:string=''
sNameResult:any[]=[]
sLetterResult:any[]=[]

  constructor(private _FetchApiService:FetchApiService) {}

  firstLetter()
  {
    this._FetchApiService.getMeal('f',this.searchByLetter).subscribe({
      next:(Response)=>{
        this.sLetterResult = Response.meals;
       
      }
    })
  }


  ngOnInit(): void {
   
    localStorage.setItem('currentPage','search')
    this._FetchApiService.getMeal('s',this.searchByName).subscribe({
      next:(Response)=>{
this.sNameResult = Response.meals

      }
    })
   

  }

}

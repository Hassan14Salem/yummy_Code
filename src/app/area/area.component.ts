import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CIAService } from '../cia.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
loadingFlag:boolean=false;
areaMeals:any[]=[]
  constructor(private CIAService:CIAService) { }

  ngOnInit(): void {
    this.loadingFlag=true;
    localStorage.setItem('currentPage','area')
    this.CIAService.getMealDetails('a').subscribe({
      next:(Response)=>{
        this.areaMeals=Response.meals ;
        this.loadingFlag=false;
        
      }
    })
  }

}

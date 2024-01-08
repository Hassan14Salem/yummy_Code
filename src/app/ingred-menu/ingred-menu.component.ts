import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CIAService } from '../cia.service';

@Component({
  selector: 'app-ingred-menu',
  templateUrl: './ingred-menu.component.html',
  styleUrls: ['./ingred-menu.component.scss']
})
export class IngredMenuComponent implements OnInit {
ingredBox:any;
loadingFlag:boolean=false
  constructor(private _ActivatedRoute:ActivatedRoute , private _CIAService:CIAService ) { }

  ngOnInit(): void {
    this.loadingFlag=true
    let {title} = this._ActivatedRoute.snapshot.params;
    this._CIAService.filterMenu('i',title).subscribe({
      next:(Response)=>{
        this.ingredBox = Response.meals;
        this.loadingFlag=false
      }
    })
    localStorage.setItem('currentPage',`/ingredMenu/${title}`)
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CIAService } from '../cia.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
MenuBox:any
loadingFlag:boolean=false;
  constructor(private _ActivatedRoute:ActivatedRoute , private _CIAService:CIAService) { }

  ngOnInit(): void {
    this.loadingFlag=true;
    let { title } = this._ActivatedRoute.snapshot.params;
    console.log(title)
    this._CIAService.filterMenu('c',title).subscribe({
      next:(Response)=>{
this.MenuBox = Response.meals;
this.loadingFlag=false;
      }
    })
    localStorage.setItem('currentPage',`/menu/${title}`)

  }

}

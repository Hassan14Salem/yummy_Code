import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CIAService } from '../cia.service';

@Component({
  selector: 'app-are-menu',
  templateUrl: './are-menu.component.html',
  styleUrls: ['./are-menu.component.scss']
})
export class AreMenuComponent implements OnInit {
areaBox:any;
loadingFlag:boolean=false;
  constructor(private _ActivatedRoute:ActivatedRoute , private _CIAService:CIAService) { }

  ngOnInit(): void {
    this.loadingFlag=true;
    let { title} = this._ActivatedRoute.snapshot.params;
    this._CIAService.filterMenu('a',title).subscribe({
      next:(Response)=>{
        this.areaBox = Response.meals ;
        this.loadingFlag=false;
      }
    })
    localStorage.setItem('currentPage',`areamenu/${title}`)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CIAService {

  constructor(private _HttpClient:HttpClient) { }
  // this service is to fetch category , meal's details 
// also used in area , category and ingred. Components
  category():Observable<any>
  {
    return this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  }
  getMealDetails(key:string):Observable<any>
  {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/list.php?${key}=list`)
  }
  filterMenu(letter:string,name:string):Observable<any>
  {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?${letter}=${name}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {
//this service is used to fetch the home Meals  and meal by ID 
// also used to make user get result by search 
// home and search Components are depend on this SERVICE 


  constructor(private _HttpClient:HttpClient) { }
  getMeal(key:string,value:string):Observable<any>
  {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?${key}=${value} `)
  }
  getMealById(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }
}

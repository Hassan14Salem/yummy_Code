import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onTimeSearch'
})
export class SearchByNamePipe implements PipeTransform {

  transform(allgames:any[], gamesKey:string): any[] {
    return allgames.filter((games)=> games.strMeal.toLowerCase().includes(gamesKey.toLowerCase()))
   } 
}

// transform(allmeals:any[], key:string):any[] {
//   return allmeals.filter((meal)=>meal.title.includes(key.toLowerCase()))
// }
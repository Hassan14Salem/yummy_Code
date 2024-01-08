import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreMenuComponent } from './are-menu/are-menu.component';
import { AreaComponent } from './area/area.component';
import { AuthGuard } from './auth.guard';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { IngredMenuComponent } from './ingred-menu/ingred-menu.component';
import { IngrediantsComponent } from './ingrediants/ingrediants.component';
import { LoginComponent } from './login/login.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"home",canActivate:[AuthGuard] , component:HomeComponent},
  {path:"search",canActivate:[AuthGuard] , component:SearchComponent},
  {path:"area",canActivate:[AuthGuard] , component:AreaComponent},
  {path:"areamenu/:title",canActivate:[AuthGuard] , component:AreMenuComponent},
  {path:"ingredMenu/:title",canActivate:[AuthGuard] , component:IngredMenuComponent},
  {path:"mealdetails/:id",canActivate:[AuthGuard] , component:MealDetailsComponent},
  {path:"menu/:title",canActivate:[AuthGuard] , component:MenuComponent},
  {path:"category",canActivate:[AuthGuard] , component:CategoryComponent},
  {path:"ingrediants",canActivate:[AuthGuard] , component:IngrediantsComponent},
  {path:"**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { AreaComponent } from './area/area.component';
import { IngrediantsComponent } from './ingrediants/ingrediants.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchByNamePipe } from './search-by-name.pipe';
import { PHandlePipe } from './p-handle.pipe';
import { MenuComponent } from './menu/menu.component';
import { AreMenuComponent } from './are-menu/are-menu.component';
import { IngredMenuComponent } from './ingred-menu/ingred-menu.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SearchComponent,
    CategoryComponent,
    AreaComponent,
    IngrediantsComponent,
    NavbarComponent,
    NotFoundComponent,
    SearchByNamePipe,
    PHandlePipe,
    MenuComponent,
    AreMenuComponent,
    IngredMenuComponent,
    MealDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,ReactiveFormsModule , HttpClientModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

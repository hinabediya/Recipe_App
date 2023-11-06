import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { ShippingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    IngredientComponent,
    HeaderComponent,
    FooterComponent,
    RecipeDetailsComponent,
    ShippingCartComponent,
    AddRecipeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

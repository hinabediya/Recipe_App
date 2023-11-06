import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { ShippingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: 'cart', component: ShippingCartComponent },
  { path: 'addrecipe', component: AddRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

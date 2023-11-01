import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from 'src/app/Interface/IRecipe';
import { CartserviceService } from 'src/app/Services/cartservice.service';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
RecipeArr!:any;
ingredients!:any;
IsAddedToCart:boolean=false;
  constructor(private api:ServiceService,private cartservice:CartserviceService,private route:ActivatedRoute){
this.api.getByID(this.route.snapshot.params["id"]).subscribe((data)=>{
  // for(let i=0;i<data.length;i++){
  //   if(data[i].id===parseInt(this.route.snapshot.params["id"])){
  //       this.RecipeArr=data[i];
  //       this.ingredients=data[i].indgredients;
  //       console.log(this.ingredients);
  //   }
  // }
  this.RecipeArr=data;
  console.log(this.RecipeArr.ingredients);
});


  }
  AddToCart(id:number,name:string){
    for(let i=0;i<this.RecipeArr.ingredients.length;i++){
if(this.RecipeArr.ingredients[i].ing1===name){
this.RecipeArr.ingredients[i].IsAdded=!this.RecipeArr.ingredients[i].IsAdded;
console.log(this.RecipeArr.ingredients[i].IsAdded)
}
 }
this.cartservice.AddIngredientsToCart(id,name);

  }
  removeFromCart(id:number,name:string){
    for(let i=0;i<this.RecipeArr.ingredients.length;i++){
if(this.RecipeArr.ingredients[i].ing1===name){
this.RecipeArr.ingredients[i].IsAdded=!this.RecipeArr.ingredients[i].IsAdded;
console.log(this.RecipeArr.ingredients[i].IsAdded)
}
 }
this.cartservice.RemoveIngredientsFromCart(id,name);
  }
}

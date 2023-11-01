import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRecipe } from '../Interface/IRecipe';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
cart:any=[];
public recipeList=new BehaviorSubject<IRecipe[]>([]);
  constructor() { }
  getCartIngreds(){
    return this.recipeList.asObservable();
  }
 
  AddIngredientsToCart(ingredientId:number,ingredientName:string){

    // if(this.cart.length===0){
    //    this.cart.push(ingredientName);
    // }
    // else{
      // for(let i=0;i<this.cart.length;i++){
      //   if(ingredientId!=this.cart[i] ){
           this.cart.push(ingredientName);
      //   }
      // }
    // }
    this.recipeList.next(this.cart);
    
  }
  RemoveIngredientsFromCart(ingredientId:number,ingredientName:string){
    debugger
    for(let i=0;i<this.cart.length;i++){
      if(ingredientId===i){
         this.cart.splice(ingredientId,1);
      }
    }
    this.recipeList.next(this.cart);
  }
}

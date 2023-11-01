import { Component, OnInit  } from '@angular/core';
import { IRecipe } from 'src/app/Interface/IRecipe';
import { CartserviceService } from 'src/app/Services/cartservice.service';

@Component({
  selector: 'app-shipping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShippingCartComponent implements OnInit{
shoppingCart:IRecipe[]=[];
constructor(private _cart:CartserviceService){
  console.log("constructor load");
}
ngOnInit(): void {
  console.log("ngload");
    this._cart.getCartIngreds().subscribe((data)=>{
    this.shoppingCart=data;
    console.log(this.shoppingCart);
    })
}
removeItem(index:number,name:string){
  debugger
  this._cart.RemoveIngredientsFromCart(index,name);
}
}

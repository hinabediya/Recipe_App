import { Component } from '@angular/core';
import { CartserviceService } from 'src/app/Services/cartservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartLength:number=0;
constructor(private _cart:CartserviceService){
  this._cart.getCartIngreds().subscribe((data)=>{
    this.cartLength=data.length;
    console.log(this.cartLength);
    })
}
}

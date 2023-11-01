import { Component } from '@angular/core';
import { IRecipe } from 'src/app/Interface/IRecipe';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
Recipies:IRecipe[]=[];
constructor(private api:ServiceService){
  this.getData();
}

getData(){
  this.api.GetALL().subscribe((data)=>{
    this.Recipies=data;
    console.log(this.Recipies)
  })
}








}

import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { IRecipe } from 'src/app/Interface/IRecipe';
import { ServiceService } from 'src/app/Services/service.service';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent {
  dataArr: IRecipe[] = [];
  displayStyle:string="none"
  constructor(private api: ServiceService) {
    this.api.GetALL().subscribe((data) => {
      this.dataArr = data;
    });
    
  }
  //formgroup
  recipies = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    image: new FormControl(''),
    shortDescription: new FormControl(''),
    description: new FormControl(''),
    rating: new FormControl(0),
    prepTime: new FormControl(0),
    cookTime: new FormControl(0),
    totalTime: new FormControl(0),
    ingredients: new FormArray([]),
  });

  addIngredient() {
    const ingredientsArray = this.recipies.get('ingredients') as FormArray;
    ingredientsArray.push(new FormControl(''));
  }

  removeIngredient(index: number) {
    const ingredientsArray = this.recipies.get('ingredients') as FormArray;
    ingredientsArray.removeAt(index);
  }

  get formData() {
      const ingArr=this.recipies.get('ingredients') as FormArray;
      return ingArr;
 
  }
  onSubmit() {
    const ingredientsArray = this.recipies.value.ingredients?.map((item) => {
      return {
        ing1: item,
        IsAdded: false,
      };
    });
    const prepTimeControl = this.recipies.get('prepTime')?.value;
  const cookTimeControl = this.recipies.get('cookTime')?.value;


  if (prepTimeControl && cookTimeControl) {
    // Calculate the total time as the sum of prepTime and cookTime
    const prepTime = prepTimeControl;
    const cookTime = cookTimeControl;
    const totalTime = prepTime + cookTime;
  
    let RecipeData = {
      id: this.dataArr.length+1,
      name: `${this.recipies.value.name}`,
      image: `${this.recipies.value.image}`,
      shortDescription: `${this.recipies.value.shortDescription}`,
      description: `${this.recipies.value.description}`,
      rating: `${this.recipies.value.rating}`,
      ingredients: ingredientsArray,
      prepTime: this.recipies.value.prepTime,
      cookTime: this.recipies.value.cookTime,
      totalTime: totalTime
    }
  
    debugger;
    this.api.readdRecipe(RecipeData);
    this.displayStyle="block";
  }
  const ingredientsLoop = this.recipies.get('ingredients') as FormArray;
  ingredientsLoop.clear();

    this.recipies.reset();
  }

  closePopup(){
    this.displayStyle="none";
  }
}

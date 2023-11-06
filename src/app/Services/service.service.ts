import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from '../Interface/IRecipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  constructor(private http:HttpClient) {
  }
private url:string = "http://localhost:3000/recipies";


GetALL():Observable<IRecipe[]>{
  return this.http.get<IRecipe[]>(this.url);
}

getByID(id:number):Observable<IRecipe[]>{
return this.http.get<IRecipe[]>(`${this.url}/${id}`);
}

readdRecipe(data:any){
  return this.http.post(this.url,data).subscribe((response:any)=>{
if(response.status===201){
  console.log('POST request was successful. Resource created.');
}
  },
  (error:any)=>{
    console.error('POST request failed:', error);
  });
}
}
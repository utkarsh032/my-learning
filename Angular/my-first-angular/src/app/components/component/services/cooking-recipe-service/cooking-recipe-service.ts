import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { RecipeInterfaceTs } from '../interface/recipe.interface.ts';

@Service()
export class CookingRecipeService {
  private http = inject(HttpClient);
  private baseUrl = 'https://dummyjson.com/recipes';

  getCookingRecipeData(skip: number) {
    return this.http.get<RecipeInterfaceTs>(`${this.baseUrl}?limit=4&skip=${skip}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class CookingRecipeService {
  private http = inject(HttpClient);
  private baseUrl = 'https://dummyjson.com/recipes';

  getCookingRecipeData(skip: number) {
    return this.http.get(`${this.baseUrl}?limit=4&skip=${skip}`);
  }
}

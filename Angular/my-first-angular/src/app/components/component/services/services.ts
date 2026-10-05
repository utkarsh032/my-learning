import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from './product-service/product-service';
import { CookingRecipeService } from './cooking-recipe-service/cooking-recipe-service';

@Component({
  imports: [],
  selector: 'app-services',
  styleUrl: './services.css',
  templateUrl: './services.html',
})
export class Services implements OnInit {
  products = signal<any[]>([]);
  recipes = signal<any[]>([]);

  limit = 4;
  skip = signal(0); // current starting point
  total = signal(0); // total recipes (the API sends this as data.total)

  constructor(
    private productService: ProductService,
    private cookingRecipeService: CookingRecipeService,
  ) {} //Only Inject the Service

  // ngOnInit() {
  //   const productData = this.productService.getProductData();
  //   this.products.set(productData);
  // }

  loadData() {
    const productData = this.productService.getProductData();
    this.products.set(productData);
  }

  loadRecipes() {
    this.cookingRecipeService.getCookingRecipeData(this.skip()).subscribe((data: any) => {
      this.recipes.set(data.recipes);
      this.total.set(data.total);
    });
  }

  // Cooking Recipe
  ngOnInit() {
    this.loadRecipes();
  }

  paginateRecipe(direction: string) {
    if (direction === 'next') {
      this.skip.set(this.skip() + this.limit);
    } else {
      this.skip.set(this.skip() - this.limit);
    }
    this.loadRecipes();
  }
}

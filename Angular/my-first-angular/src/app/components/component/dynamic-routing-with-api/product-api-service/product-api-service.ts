import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Product, ProductResponse } from '../interface/product.interface';

@Service()
export class ProductApiService {
  private http = inject(HttpClient);
  private baseUrl = 'https://dummyjson.com/products';

  // Product list - for the products page
  getProducts() {
    return this.http.get<ProductResponse>(`${this.baseUrl}?limit=12`);
  }

  // One product by id - for the product details page
  getProductById(id: string) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}

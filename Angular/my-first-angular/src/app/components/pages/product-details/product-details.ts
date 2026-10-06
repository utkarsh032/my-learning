import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../component/dynamic-routing-with-api/interface/product.interface';
import { ProductApiService } from '../../component/dynamic-routing-with-api/product-api-service/product-api-service';

@Component({
  imports: [RouterLink],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  route = inject(ActivatedRoute);
  productApiService = inject(ProductApiService);

  product = signal<Product | null>(null);
  message = signal('Loading product...');

  constructor() {
    // Read the dynamic id from the url (product/:id)
    // subscribe so the product updates when only the id changes
    this.route.params.subscribe((params) => {
      this.loadProduct(params['id']);
    });
  }

  // Fetch only the product of this id from the api
  loadProduct(id: string) {
    this.product.set(null);
    this.message.set('Loading product...');

    this.productApiService.getProductById(id).subscribe({
      next: (data) => this.product.set(data),
      // The api sends an error when there is no product with this id (product/99999)
      error: () => this.message.set('Product not found'),
    });
  }
}

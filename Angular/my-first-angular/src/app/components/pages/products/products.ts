import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../component/dynamic-routing-with-api/interface/product.interface';
import { ProductApiService } from '../../component/dynamic-routing-with-api/product-api-service/product-api-service';

@Component({
  imports: [RouterLink],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit {
  productApiService = inject(ProductApiService);

  products = signal<Product[]>([]);

  // Fetch the product list from the api when the page opens
  ngOnInit() {
    this.productApiService.getProducts().subscribe((data) => {
      this.products.set(data.products);
    });
  }
}

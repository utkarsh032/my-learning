import { Service } from '@angular/core';

@Service()
export class ProductService {
  constructor() {
    console.log('Product Service Called');
  }

  productData = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Apple smartphone with 128GB storage',
      price: 79999,
      category: 'Mobile',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Android phone with AMOLED display',
      price: 74999,
      category: 'Mobile',
    },
    {
      id: 3,
      name: 'MacBook Air M3',
      description: '13-inch laptop with Apple M3 chip',
      price: 114900,
      category: 'Laptop',
    },
    {
      id: 4,
      name: 'Dell Inspiron 15',
      description: 'Intel i5 laptop with 16GB RAM',
      price: 58990,
      category: 'Laptop',
    },
    {
      id: 5,
      name: 'Sony WH-1000XM5',
      description: 'Wireless noise cancelling headphones',
      price: 29990,
      category: 'Audio',
    },
    {
      id: 6,
      name: 'boAt Airdopes 141',
      description: 'True wireless earbuds with 42 hours playback',
      price: 1299,
      category: 'Audio',
    },
    {
      id: 7,
      name: 'Apple Watch Series 9',
      description: 'Smartwatch with fitness tracking',
      price: 41900,
      category: 'Watch',
    },
    {
      id: 8,
      name: 'Logitech MX Master 3S',
      description: 'Wireless mouse for productivity',
      price: 9995,
      category: 'Accessories',
    },
  ];

  getProductData() {
    return this.productData;
  }
}

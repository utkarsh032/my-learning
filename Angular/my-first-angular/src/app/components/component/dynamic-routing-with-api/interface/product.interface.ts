// one product
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand?: string; // '?' means optional - some products have no brand
  availabilityStatus: string;
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
  tags: string[];
  images: string[];
  thumbnail: string;
}

// full API response - https://dummyjson.com/products
export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

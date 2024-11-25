import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponse } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly path = 'https://dummyjson.com';

  constructor(private readonly http: HttpClient) {}

  public getAllProducts() {
    return this.http.get<ProductResponse>(`${this.path}/products`);
  }
}

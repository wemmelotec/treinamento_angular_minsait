import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeResponse } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private readonly path = 'https://dummyjson.com';


  constructor(private readonly http: HttpClient) {}

  public getAllProducts() {
    return this.http.get<RecipeResponse>(`${this.path}/recipes`);
  }
}

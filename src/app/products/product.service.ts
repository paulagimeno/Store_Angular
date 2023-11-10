import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  update(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.apiUrl}/${product.id}`, product);
  }

}

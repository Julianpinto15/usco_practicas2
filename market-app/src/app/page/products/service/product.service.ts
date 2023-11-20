import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/dataProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) {}

  getProducts(section: String): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${this.apiUrl}/products?section=${section}`
    );
  }
}

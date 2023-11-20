import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/dataProduct';
// import { ProductService } from 'src/app/page/products/service/product.service';

@Component({
  selector: 'shared-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  productsLacteo: Product[] = [];
  productsAseo: Product[] = [];
  productBebida: Product[] = [];
  productAseoP: Product[] = [];
  productMascota: Product[] = [];

  ngOnInit(): void {
    this.productsLacteo = [...this.productsLacteo];
    this.productsAseo = [...this.productsAseo];
    this.productBebida = [...this.productBebida];
    this.productAseoP = [...this.productAseoP];
    this.productMascota = [...this.productMascota];
  }
  // constructor(private productService: ProductService) {}

  // ngOnInit(): void {
  //   this.productService.getProducts('lacteos').subscribe((data) => {
  //     this.productsLacteo = data;
  //   });

  //   this.productService.getProducts('aseo').subscribe((data) => {
  //     this.productsAseo = data;
  //   });

  //   this.productService.getProducts('bebidas').subscribe((data) => {
  //     this.productBebida = data;
  //   });

  //   this.productService.getProducts('aseo-personal').subscribe((data) => {
  //     this.productAseoP = data;
  //   });

  //   this.productService.getProducts('mascota').subscribe((data) => {
  //     this.productMascota = data;
  //   });
  // }
}

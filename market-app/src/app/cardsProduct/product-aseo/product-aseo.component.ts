import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/dataProduct';
import { productCarrito } from 'src/app/models/productCarrito';

@Component({
  selector: 'cardsProducts-product-aseo',
  templateUrl: './product-aseo.component.html',
  styleUrls: ['./product-aseo.component.scss'],
})
export class ProductAseoComponent {
  @Input() allProducts: Product[] = [];

  agregarCarrito(product: Product) {}
}

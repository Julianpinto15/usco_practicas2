import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/dataProduct';

@Component({
  selector: 'cardsProduct-product-lacteo',
  templateUrl: './product-lacteo.component.html',
  styleUrls: ['./product-lacteo.component.scss'],
})
export class ProductLacteoComponent {
  @Input() allProducts: Product[] = [];
}

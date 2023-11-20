import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/dataProduct';

@Component({
  selector: 'cardsProduct-product-aseo-per',
  templateUrl: './product-aseo-per.component.html',
  styleUrls: ['./product-aseo-per.component.scss'],
})
export class ProductAseoPerComponent {
  @Input() allProducts: Product[] = [];
}

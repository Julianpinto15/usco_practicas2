import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/dataProduct';

@Component({
  selector: 'cardsProduct-product-bebida',
  templateUrl: './product-bebida.component.html',
  styleUrls: ['./product-bebida.component.scss'],
})
export class ProductBebidaComponent {
  @Input() allProducts: Product[] = [];
}

import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/dataProduct';

@Component({
  selector: 'cardsProduct-product-mascota',
  templateUrl: './product-mascota.component.html',
  styleUrls: ['./product-mascota.component.scss'],
})
export class ProductMascotaComponent {
  @Input() allProducts: Product[] = [];
}

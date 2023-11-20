import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  images = [
    {
      imageSrc: '../../../assets/img/promocion6.jpg',
      imageAlt: 'imagen promocion 1',
    },
    {
      imageSrc: '../../../assets/img/promocion3.jpg',
      imageAlt: 'imagen promocion 2',
    },
    {
      imageSrc: '../../../assets/img/promocion4.jpg',
      imageAlt: 'imagen promocion 3',
    },
    {
      imageSrc: '../../../assets/img/promocion1.jpg',
      imageAlt: 'imagen promocion 4',
    },
  ];
}

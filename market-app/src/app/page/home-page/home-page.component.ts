import { Component } from '@angular/core';

@Component({
  selector: 'page-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
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

// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { SearchBarComponent } from './components/searchBar/search-bar.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContentMainComponent } from './components/mainHome/content-main.component';
import { LineUbicationComponent } from './components/line-ubication/line-ubication.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarritoBuyComponent } from './components/carrito-buy/carrito-buy.component';
import { HeaderProductsComponent } from './components/headerProducts/header-products.component';
import { AdminModule } from '../Admin/admin.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderHomeComponent,
    SearchBarComponent,
    NavegationComponent,
    SliderComponent,
    ContentMainComponent,
    LineUbicationComponent,
    CardsComponent,
    FooterComponent,
    CarritoBuyComponent,
    HeaderProductsComponent,
  ],
  imports: [CommonModule, AdminModule, AppRoutingModule],
  exports: [
    HeaderHomeComponent,
    NavegationComponent,
    SliderComponent,
    SearchBarComponent,
    ContentMainComponent,
    LineUbicationComponent,
    CardsComponent,
    FooterComponent,
    CarritoBuyComponent,
    CommonModule,
    HeaderProductsComponent,
  ],
})
export class SharedModule {}

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HeaderHomeComponent } from './components/header-home/header-home.component';
// import { SearchBarComponent } from './components/searchBar/search-bar.component';
// import { NavegationComponent } from './components/navegation/navegation.component';
// import { SliderComponent } from './components/slider/slider.component';
// import { ContentMainComponent } from './components/mainHome/content-main.component';
// import { LineUbicationComponent } from './components/line-ubication/line-ubication.component';
// import { CardsComponent } from './components/cards/cards.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { CarritoBuyComponent } from './components/carrito-buy/carrito-buy.component';
// import { HeaderProductsComponent } from './components/headerProducts/header-products.component';

// @NgModule({
//   declarations: [
//     HeaderHomeComponent,
//     SearchBarComponent,
//     NavegationComponent,
//     SliderComponent,
//     ContentMainComponent,
//     LineUbicationComponent,
//     CardsComponent,
//     FooterComponent,
//     CarritoBuyComponent,
//     HeaderProductsComponent,
//   ],
//   imports: [CommonModule],
//   exports: [
//     HeaderHomeComponent,
//     NavegationComponent,
//     SliderComponent,
//     SearchBarComponent,
//     ContentMainComponent,
//     LineUbicationComponent,
//     CardsComponent,
//     FooterComponent,
//     CarritoBuyComponent,
//     CommonModule,
//     HeaderProductsComponent,
//   ],
// })
// export class SharedModule {}

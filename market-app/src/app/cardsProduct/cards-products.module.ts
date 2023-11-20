import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAseoComponent } from './product-aseo/product-aseo.component';
import { ProductLacteoComponent } from './product-lacteo/product-lacteo.component';
import { ProductBebidaComponent } from './product-bebida/product-bebida.component';
import { ProductAseoPerComponent } from './product-aseo-per/product-aseo-per.component';
import { ProductMascotaComponent } from './product-mascota/product-mascota.component';

@NgModule({
  declarations: [
    ProductLacteoComponent,
    ProductAseoComponent,
    ProductBebidaComponent,
    ProductAseoPerComponent,
    ProductMascotaComponent,
  ],
  imports: [CommonModule],
  exports: [
    ProductLacteoComponent,
    ProductAseoComponent,
    ProductBebidaComponent,
    ProductAseoPerComponent,
    ProductMascotaComponent,
  ],
})
export class CardsProductsModule {}

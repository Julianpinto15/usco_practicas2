import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './page/products/products.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ConocenosComponent } from './page/conocenos/conocenos.component';
import { ContactoComponent } from './page/contacto/contacto.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomePageComponent,
  },
  {
    path: 'productos',
    component: ProductsComponent,
  },
  {
    path: 'conocenos',
    component: ConocenosComponent,
  },
  {
    path: 'contactenos',
    component: ContactoComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./Admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

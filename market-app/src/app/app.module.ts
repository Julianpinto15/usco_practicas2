import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './page/products/products.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { CardsProductsModule } from './cardsProduct/cards-products.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './Admin/admin.module';
import { PanelAdminComponent } from './page/panel-admin/panel-admin.component';
import { SidenavComponent } from './siderbar/components/sidenav/sidenav.component';
import { StadisticsComponent } from './siderbar/components/stadistics/stadistics.component';
import { DashboardComponent } from './siderbar/components/dashboard/dashboard.component';
import { SiderRoutingModule } from './siderbar/sider-routing.module';
import { SiderBarComponent } from './siderbar/components/sider-bar/sider-bar.component';
import { ConocenosComponent } from './page/conocenos/conocenos.component';
import { ContactoComponent } from './page/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelAdminComponent,
    ProductsComponent,
    HomePageComponent,
    ConocenosComponent,
    ContactoComponent,
    SidenavComponent,
    StadisticsComponent,
    DashboardComponent,
    SiderBarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    CardsProductsModule,
    HttpClientModule,
    AdminModule,
    SiderRoutingModule,
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VentanaCarritoService } from 'src/app/service/ventana-carrito.service';
import { VentanaSesionService } from 'src/app/service/ventana-sesion.service';

@Component({
  selector: 'shared-header-products',
  templateUrl: './header-products.component.html',
  styleUrls: ['./header-products.component.scss'],
})
export class HeaderProductsComponent {
  mostrarContenedor$: Observable<boolean>;
  mostrarCarrito$: Observable<boolean>;

  constructor(
    private ventanaSesionService: VentanaSesionService,
    private ventanaCarritoService: VentanaCarritoService // Cambiado el servicio aquí
  ) {
    this.mostrarContenedor$ = this.ventanaSesionService.mostrarContenedor$;
    this.mostrarCarrito$ = this.ventanaCarritoService.mostrarCarrito$; // Cambiado el servicio aquí
  }

  ventanaUser() {
    this.ventanaSesionService.toggleMostrarContenedor();
  }

  toggleCarrito() {
    this.ventanaCarritoService.toggleMostrarCarrito(); // Cambiado el servicio aquí
  }
}

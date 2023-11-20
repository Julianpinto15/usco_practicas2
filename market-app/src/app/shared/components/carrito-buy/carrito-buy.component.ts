import { Component } from '@angular/core';
import { VentanaCarritoService } from '../../../service/ventana-carrito.service';

@Component({
  selector: 'shared-carrito-buy',
  templateUrl: './carrito-buy.component.html',
  styleUrls: ['./carrito-buy.component.scss'],
})
export class CarritoBuyComponent {
  mostrarCarrito: boolean = false;

  constructor(private carritoService: VentanaCarritoService) {
    this.carritoService.mostrarCarrito$.subscribe((mostrarCarrito) => {
      this.mostrarCarrito = mostrarCarrito;
      console.log('Estado del carrito:', mostrarCarrito);
    });
  }

  cerrarCarrito() {
    this.carritoService.toggleMostrarCarrito();
  }
  // mostrarCarrito: boolean = false;

  // constructor(private carritoService: VentanaCarritoService) {
  //   this.carritoService.mostrarCarrito$.subscribe((mostrarCarrito) => {
  //     this.mostrarCarrito = mostrarCarrito;
  //   });
  // }

  // cerrarCarrito() {
  //   this.carritoService.toggleMostrarCarrito();
  // }
}

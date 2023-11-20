import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VentanaSesionService {
  private mostrarContenedorSource = new BehaviorSubject<boolean>(false);
  mostrarContenedor$ = this.mostrarContenedorSource.asObservable();

  private mostrarCarritoSource = new BehaviorSubject<boolean>(false);
  mostrarCarrito$ = this.mostrarCarritoSource.asObservable();

  toggleMostrarContenedor() {
    const currentValue = this.mostrarContenedorSource.value;
    this.mostrarContenedorSource.next(!currentValue);
    this.actualizarClaseEnBody(!currentValue);
  }

  toggleMostrarCarrito() {
    const currentValue = this.mostrarCarritoSource.value;
    this.mostrarCarritoSource.next(!currentValue);
  }

  private actualizarClaseEnBody(mostrar: boolean): void {
    if (mostrar) {
      document.body.classList.add('ventana-abierta');
    } else {
      document.body.classList.remove('ventana-abierta');
    }
  }
}

// export class VentanaSesionService {
//   private mostrarContenedorSource = new BehaviorSubject<boolean>(false);
//   mostrarContenedor$ = this.mostrarContenedorSource.asObservable();

//   toggleMostrarContenedor() {
//     const currentValue = this.mostrarContenedorSource.value;
//     this.mostrarContenedorSource.next(!currentValue);
//     this.actualizarClaseEnBody(!currentValue);
//   }

//   private actualizarClaseEnBody(mostrar: boolean): void {
//     if (mostrar) {
//       document.body.classList.add('ventana-abierta');
//     } else {
//       document.body.classList.remove('ventana-abierta');
//     }
//   }
// }

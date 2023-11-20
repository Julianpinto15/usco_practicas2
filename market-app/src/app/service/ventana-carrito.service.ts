import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VentanaCarritoService {
  private mostrarCarritoSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  mostrarCarrito$: Observable<boolean> =
    this.mostrarCarritoSubject.asObservable();

  toggleMostrarCarrito() {
    this.mostrarCarritoSubject.next(!this.mostrarCarritoSubject.value);
  }
}

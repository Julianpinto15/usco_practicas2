import { Component } from '@angular/core';
import { VentanaSesionService } from 'src/app/service/ventana-sesion.service';

@Component({
  selector: 'admin-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent {
  mostrarContenedor = false;
  mostrarFormAdmin = false;

  constructor(private ventanaSesionService: VentanaSesionService) {
    this.ventanaSesionService.mostrarContenedor$.subscribe(
      (mostrarContenedor) => (this.mostrarContenedor = mostrarContenedor)
    );
  }

  cerrarVentana() {
    this.ventanaSesionService.toggleMostrarContenedor();
    this.mostrarFormAdmin = false;
  }

  mostrarFormularioAdmin() {
    this.mostrarFormAdmin = true;
  }

  volverAInicioSesion() {
    this.mostrarFormAdmin = false;
  }
  // mostrarContenedor = false;

  // constructor(private ventanaSesionService: VentanaSesionService) {
  //   this.ventanaSesionService.mostrarContenedor$.subscribe(
  //     (mostrarContenedor) => (this.mostrarContenedor = mostrarContenedor)
  //   );
  // }

  // cerrarVentana() {
  //   this.ventanaSesionService.toggleMostrarContenedor();
  // }
}

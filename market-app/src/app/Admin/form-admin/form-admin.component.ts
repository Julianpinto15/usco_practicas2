import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.scss'],
})
export class FormAdminComponent {
  @Output() cerrarFormulario = new EventEmitter<void>();
  @Output() volverInicioSesion = new EventEmitter<void>();

  formData: any = {
    email: '',
    password: '',
  };

  // Agrega el Router en el constructor
  constructor(private apiService: ApiService, private router: Router) {}

  cerrarFormularioAdmin() {
    this.cerrarFormulario.emit();
  }

  volverAInicioSesion() {
    this.volverInicioSesion.emit();
  }

  registrarUsuario() {
    this.apiService.registrarUsuario(this.formData).subscribe(
      (response) => {
        console.log('Usuario registrado con éxito:', response);
        // Redirige al usuario a otra página
        this.router.navigate(['/page']);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        // Puedes manejar errores de registro aquí, como mostrar un mensaje al usuario
      }
    );
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormAdminComponent } from './form-admin/form-admin.component';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [InicioSesionComponent, FormAdminComponent],
  imports: [CommonModule, FormsModule, AdminRoutingModule],
  exports: [InicioSesionComponent, FormAdminComponent],
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from '../siderbar/components/sidenav/sidenav.component';

@NgModule({
  declarations: [PanelAdminComponent, SidenavComponent],
  imports: [CommonModule, SharedModule],
  exports: [PanelAdminComponent],
})
export class PageModule {}

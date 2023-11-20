import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PanelAdminComponent } from '../page/panel-admin/panel-admin.component';

export const routes: Routes = [
  {
    path: 'panel',
    component: PanelAdminComponent,
  },
  {
    path: '**',
    redirectTo: 'panel',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.scss'],
})
export class PanelAdminComponent {
  isSideNavCollapsed = true;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    console.log('Toggle side nav:', data);
    this.screenWidth = data.screenWidth; // Cambiar de screeWidth a screenWidth
    this.isSideNavCollapsed = data.collapsed;
  }
}

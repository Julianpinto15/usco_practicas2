import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sider-bar',
  templateUrl: './sider-bar.component.html',
  styleUrls: ['./sider-bar.component.scss'],
})
export class SiderBarComponent {
  @Input() collapse = false;
  @Input() screenWidth = 0;

  ngBodyClass(): string {
    let styleClass = '';
    if (this.collapse && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (
      this.collapse &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}

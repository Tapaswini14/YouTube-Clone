import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'YouTube';
  isSideNavOpen = false;

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}

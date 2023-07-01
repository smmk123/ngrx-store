import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'About',
        icon: 'pi pi-info',
        routerLink: '/about',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact',
      },
    ];
  }
}
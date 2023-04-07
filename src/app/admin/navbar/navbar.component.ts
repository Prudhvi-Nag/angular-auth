import { Component } from '@angular/core';
import { MenuItems } from './MenuItems';
import { MenuItem } from '../interface/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router:Router){}
  menuItems: MenuItem[] = MenuItems;
  forLogin(){
    console.log("account logout");
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  forDashborad(){
    console.log("move user to dashboard");
    this.router.navigate(['/dashboard']);
  }
}

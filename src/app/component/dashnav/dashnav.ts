import { Component, Input } from '@angular/core';
import { Drawer } from 'primeng/drawer';
import { Sidebar } from '../sidebar/sidebar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashnav',
  imports: [Drawer, Sidebar, RouterLink],
  templateUrl: './dashnav.html',
  styleUrl: './dashnav.css',
})
export class Dashnav {
  @Input() title = '';
  @Input() addReq = false;
  @Input() route = '';
  drawerVisible = false;

  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }
}

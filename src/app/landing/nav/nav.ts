import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, DrawerModule, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  menu = false;
  showMenu() {
    this.menu = !this.menu;
    console.log(this.menu);
  }

  protected readonly alert = alert;
}

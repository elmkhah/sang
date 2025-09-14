import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MobSidebar } from './mob-sidebar/mob-sidebar';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, MobSidebar],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  menu = false;
  showMenu() {
    this.menu = !this.menu;
  }
}

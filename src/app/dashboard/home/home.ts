import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { MobMenu } from '../../component/mob-menu/mob-menu';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  imports: [Button, RouterLink, MobMenu, TagModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public router: Router) {}

  protected readonly localStorage = localStorage;

  menu = false;
  showMenu() {
    this.menu = !this.menu;
  }
}

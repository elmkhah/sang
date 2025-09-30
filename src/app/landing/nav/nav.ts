import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { Master } from '../../service/master';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, DrawerModule, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  menu = false;
  isLogin = signal(false);
  name = '';
  showMenu() {
    this.menu = !this.menu;
    console.log(this.menu);
  }

  protected readonly alert = alert;
  constructor(public master: Master) {}

  ngOnInit() {
    this.master.profile().subscribe({
      next: (data) => {
        if (data.status === 200) {
          this.isLogin.set(true);
          this.name = data.body.name;
          localStorage.setItem('name', data.body.name);
        }
      },
      error: (err) => {},
    });
  }
}

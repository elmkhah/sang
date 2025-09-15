import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Master } from '../../service/master';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(public master: Master) {}
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-mob-menu',
  imports: [Sidebar],
  templateUrl: './mob-menu.html',
  styleUrl: './mob-menu.css',
})
export class MobMenu {
  @Output() show = new EventEmitter<void>();

  sendShow() {
    this.show.emit();
  }
}

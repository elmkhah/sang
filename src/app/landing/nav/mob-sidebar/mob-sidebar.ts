import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mob-sidebar',
  imports: [],
  templateUrl: './mob-sidebar.html',
  styleUrl: './mob-sidebar.css',
})
export class MobSidebar {
  @Output() show = new EventEmitter<void>();

  sendShow() {
    this.show.emit();
  }
}

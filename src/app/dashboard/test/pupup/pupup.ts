import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pupup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pupup.html',
})
export class Pupup {
  @Input() show = false;
  @Input() item: any;
  @Output() close = new EventEmitter<void>();

  constructor(public router: Router) {}
  haveError = false;
  phoneNum: string = '';
  url = '';
  Confirm() {
    this.close.emit();
    console.log(this.item);
  }

  protected readonly confirm = confirm;
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pupup',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './pupup.html',
})
export class Pupup {
  @Input() show = false;
  @Input() item :any;
  @Output() close = new EventEmitter<void>();

  haveError=false
  phoneNum:string='';
  Confirm(){
      this.close.emit();
  }


  protected readonly confirm = confirm;
}

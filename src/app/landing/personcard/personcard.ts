import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personcard',
  templateUrl: './personcard.html',
  styleUrl: './personcard.css',
})
export class Personcard {
  @Input() public person: any;
}

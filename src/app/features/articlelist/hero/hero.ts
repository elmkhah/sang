import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  @Input() title!: string;
  @Input() image: string = '/assets/image/Com.jpg';
}

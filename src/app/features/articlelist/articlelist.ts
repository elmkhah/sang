import { Component } from '@angular/core';
import { Nav } from '../../landing/nav/nav';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-articlelist',
  imports: [Nav, Hero],
  templateUrl: './articlelist.html',
  styleUrl: './articlelist.css',
})
export class Articlelist {}

import { Component } from '@angular/core';
import { Nav } from '../../landing/nav/nav';
import { Hero } from './hero/hero';
import { Card } from '../article/card/card';

@Component({
  selector: 'app-articlelist',
  imports: [Nav, Hero, Card],
  templateUrl: './articlelist.html',
  styleUrl: './articlelist.css',
})
export class Articlelist {}

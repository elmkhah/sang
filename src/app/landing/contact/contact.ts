import { Component } from '@angular/core';
import { Hero } from '../../features/articlelist/hero/hero';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contact',
  imports: [Hero, Nav, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}

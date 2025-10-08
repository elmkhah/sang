import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Hero } from '../../features/articlelist/hero/hero';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-privacy-policy',
  imports: [Footer, Hero, Nav],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicy {}

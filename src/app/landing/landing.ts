import { Component } from '@angular/core';
import {Nav} from './nav/nav';
import {Hero} from './hero/hero';
import {Footer} from './footer/footer';


@Component({
  selector: 'app-landing',
  imports: [Hero, Footer, Nav],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {

}

import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Form } from '../form/form';
import { Hero } from '../../features/articlelist/hero/hero';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-bug-report',
  imports: [Footer, Form, Hero, Nav],
  templateUrl: './bug-report.html',
  styleUrl: './bug-report.css',
})
export class BugReport {}

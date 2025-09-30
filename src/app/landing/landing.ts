import { Component } from '@angular/core';
import { Nav } from './nav/nav';
import { Hero } from './hero/hero';
import { Footer } from './footer/footer';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { Master } from '../service/master';
import { Card } from '../features/article/card/card';
import moment from 'moment-jalaali';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [Hero, Footer, Nav, AnimateOnScroll, Card, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  posts!: any;

  constructor(
    public master: Master,
    public changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.master.articleList().subscribe({
      next: (data) => {
        this.posts = data.body.slice(0, 3);
        for (let a of this.posts) {
          a.description = a.description.slice(0, 150);
          a.description += '...';
          a.created_at = moment(a.created_at).format('jYYYY/jMM/jDD ');
        }
        this.changeDetectorRef.detectChanges();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

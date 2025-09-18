import { Component } from '@angular/core';
import { Nav } from '../../landing/nav/nav';
import { Hero } from './hero/hero';
import { Card } from '../article/card/card';
import { Master } from '../../service/master';
import { ChangeDetectorRef } from '@angular/core';
import moment from 'moment-jalaali';
import { SkeletonModule } from 'primeng/skeleton';
import { Footer } from '../../landing/footer/footer';

@Component({
  selector: 'app-articlelist',
  imports: [Nav, Hero, Card, SkeletonModule, Footer],
  templateUrl: './articlelist.html',
  styleUrl: './articlelist.css',
})
export class Articlelist {
  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public master: Master,
  ) {}
  isLoading = false;
  articlelist!: any;
  selectedArticleList: any;
  pageNumber = 1;
  totalPages = 1;

  ngOnInit() {
    document.getElementById('nav')?.scrollIntoView();
    this.isLoading = true;
    this.master.articleList().subscribe({
      next: (data) => {
        this.articlelist = data.body;
        for (var a of this.articlelist) {
          a.description = a.description.slice(0, 150);
          a.description += '...';
          a.created_at = moment(a.created_at).format('jYYYY/jMM/jDD ');
          this.totalPages = Math.ceil(this.articlelist.length / 9);
          this.selectedArticleList = this.articlelist.slice(0, 9);
        }
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }

  load() {
    this.pageNumber++;
    this.selectedArticleList = this.articlelist.slice(0, this.pageNumber * 9);
    this.changeDetectorRef.detectChanges();
  }
}

import { Component } from '@angular/core';
import { Nav } from '../../landing/nav/nav';
import { Hero } from './hero/hero';
import { Card } from '../article/card/card';
import { Master } from '../../service/master';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-articlelist',
  imports: [Nav, Hero, Card],
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

  ngOnInit() {
    this.isLoading = true;
    this.master.articleList().subscribe({
      next: (data) => {
        this.articlelist = data.body;
        this.isLoading = false;
        console.log(data);
        this.changeDetectorRef.detectChanges();
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }
}

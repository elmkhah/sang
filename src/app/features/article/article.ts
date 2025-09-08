import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Master } from '../../service/master';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
  constructor(
    public route: ActivatedRoute,
    private master: Master,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  id = '';
  isLoading = false;
  article!: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('articleId')!;
    this.isLoading = true;
    this.master.articleDetail(this.id).subscribe({
      next: (data) => {
        if (data.status === 200) {
          this.article = data.body;
          console.log(this.article);
          this.isLoading = false;
          this.changeDetectorRef.detectChanges();
        }
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }
}

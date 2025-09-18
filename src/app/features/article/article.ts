import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Master } from '../../service/master';
import { ChangeDetectorRef } from '@angular/core';
import { Nav } from '../../landing/nav/nav';
import moment from 'moment-jalaali';
import { Footer } from '../../landing/footer/footer';
import { SkeletonModule } from 'primeng/skeleton';
@Component({
  selector: 'app-article',
  imports: [Nav, Footer, SkeletonModule],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
  constructor(
    public route: ActivatedRoute,
    private master: Master,
  ) {}

  id = '';
  isLoading = signal(true);
  article!: any;
  isImageLoading = true;

  ngOnInit() {
    document.getElementById('nav')?.scrollIntoView();

    this.id = this.route.snapshot.paramMap.get('articleId')!;
    this.master.articleDetail(this.id).subscribe({
      next: (data) => {
        if (data.status === 200) {
          this.article = data.body;
          this.article.created_at = moment(this.article.created_at).format(
            'jYYYY/jMM/jDD ',
          );
          this.isLoading.set(false);
          this.isImageLoading = true;
        }
      },
      error: (err) => {
        console.log(err);
        this.isLoading.set(false);
      },
    });
  }

  protected readonly console = console;
}

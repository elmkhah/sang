import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Master } from '../../service/master';
import { ChangeDetectorRef } from '@angular/core';
import { Nav } from '../../landing/nav/nav';
import moment from 'moment-jalaali';
import { Footer } from '../../landing/footer/footer';
import { SkeletonModule } from 'primeng/skeleton';
import { Blogsidebar } from '../../component/blogsidebar/blogsidebar';

@Component({
  selector: 'app-article',
  imports: [Nav, Footer, SkeletonModule, Blogsidebar],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
  constructor(
    public route: ActivatedRoute,
    private master: Master,
  ) {}

  slug = '';
  isLoading = signal(true);
  article!: any;
  isImageLoading = true;

  ngOnInit() {
    document.getElementById('nav')?.scrollIntoView();

    this.slug = this.route.snapshot.paramMap.get('slug')!;
    this.master.articleDetail(this.slug).subscribe({
      next: (data) => {
        console.log(data);
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

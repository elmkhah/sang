import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Master } from '../../../service/master';
import { ChangeDetectorRef } from '@angular/core';
import { TableModule } from 'primeng/table';
import moment from 'moment-jalaali';
import { Dashnav } from '../../../component/dashnav/dashnav';

interface Article {
  author: string;
  created_at: string;
  description: string;
  id: number;
  image: string;
  title: string;
}

@Component({
  selector: 'app-posts',
  imports: [RouterLink, TableModule, Dashnav],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  protected readonly localStorage = localStorage;
  protected readonly console = console;

  posts!: Article[];
  isLoading = signal(true);
  constructor(
    public master: Master,
    public changeDetector: ChangeDetectorRef,
  ) {}

  res!: any;
  ngOnInit() {
    this.master.articleList().subscribe({
      next: (data) => {
        this.posts = data.body;
        for (var a of this.posts) {
          a.description = a.description.slice(0, 150);
          a.description += '...';
          a.created_at = moment(a.created_at).format('jYYYY/jMM/jDD HH:MM');
        }
        this.isLoading.set(false);
        this.changeDetector.detectChanges();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

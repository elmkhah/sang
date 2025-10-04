import { Component } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { Master } from '../../service/master';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Dashnav } from '../../component/dashnav/dashnav';

@Component({
  selector: 'app-addarticle',
  imports: [EditorModule, FormsModule, RouterLink, Dashnav],
  templateUrl: './addarticle.html',
  styleUrl: './addarticle.css',
})
export class Addarticle {
  constructor(
    public master: Master,
    public changeDetectorRef: ChangeDetectorRef,
    public router: Router,
  ) {}
  content = '';
  title = '';
  description = '';
  image = '';
  author = '';
  slug = '';

  submit() {
    if (this.author && this.content && this.image && this.description) {
      this.master
        .addArticle(
          this.title,
          this.author,
          this.content,
          this.description,
          this.image,
        )
        .subscribe({
          next: (res) => {
            if (res.status == 201) {
              this.image = '';
              this.title = '';
              this.description = '';
              this.content = '';
              this.author = '';
              this.slug = '';
              this.changeDetectorRef.detectChanges();
              this.router.navigateByUrl('/dashboard/posts');
              alert(res.body.message);
            }
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }

  protected readonly localStorage = localStorage;
}

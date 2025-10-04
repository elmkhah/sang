import { Component } from '@angular/core';
import { Editor, EditorModule } from 'primeng/editor';
import { Master } from '../../service/master';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editblog',
  imports: [EditorModule, FormsModule, RouterLink],
  templateUrl: './editblog.html',
  styleUrl: './editblog.css',
})
export class Editblog {
  id = '0';
  constructor(
    public master: Master,
    public changeDetectorRef: ChangeDetectorRef,
    public router: Router,
    public route: ActivatedRoute,
  ) {}

  content = '';
  title = '';
  description = '';
  image = '';
  author = '';
  slug = '';

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('articleId')!;
    this.master.articleDetail(this.id.toString()).subscribe({
      next: (data) => {
        this.title = data.body.title;
        this.author = data.body.author;
        this.content = data.body.content;
        this.image = data.body.image;
        this.slug = data.body.slug;
        this.description = data.body.description;
        this.changeDetectorRef.detectChanges();

        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submit() {
    console.log(this.slug);
    this.master
      .editArticle(
        this.title,
        this.author,
        this.content,
        this.description,
        this.image,
        this.id,
        this.slug,
      )
      .subscribe({
        next: (res) => {
          this.changeDetectorRef.detectChanges();
          alert('مقاله با موفقیت ویرایش شد');
          this.router.navigateByUrl('/dashboard/posts');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  protected readonly localStorage = localStorage;
}

import { Component } from '@angular/core';
import { Master } from '../../service/master';
import { SkeletonModule } from 'primeng/skeleton';
import moment from 'moment-jalaali';
import { ChangeDetectorRef } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { Router, RouterLink } from '@angular/router';
import { Pupup } from '../../dashboard/test/pupup/pupup';
import { Dashnav } from '../../component/dashnav/dashnav';

@Component({
  selector: 'app-testhistory',
  standalone: true,
  imports: [SkeletonModule, PaginatorModule, RouterLink, Pupup, Dashnav],
  templateUrl: './testhistory.html',
  styleUrl: './testhistory.css',
})
export class Testhistory {
  history: any[] = [];
  pagedItems: any[] = [];
  isLoading = false;
  count = 0;
  rows = 5;
  first = 0;
  isModalOpen = false;
  selectedItem: any;

  constructor(
    public master: Master,
    public changeDetector: ChangeDetectorRef,
    public router: Router,
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.master.testHistory().subscribe({
      next: (hisList) => {
        this.history = hisList.body || [];

        this.history.forEach((i: any) => {
          if (i.date) {
            i.date = moment(i.date).format('HH:mm jYYYY/jMM/jDD');
          }
        });

        this.history.sort((a: any, b: any) => b.id - a.id);

        this.count = this.history.length;
        this.isLoading = false;
        this.updatePage();
        console.log(this.pagedItems);

        this.changeDetector.detectChanges();
      },
      error: (err) => {
        console.log('error handler اجرا شد');
        console.log('status:', err.status, 'statusText:', err.statusText);
        console.log('raw error:', err.error);

        if (err.status === 500) {
          console.error('خطای سرور 500:', err);
          // اینجا مثلاً یه پیام یوزرفرندلی بده
          console.log('خطای داخلی سرور. لطفا بعدا دوباره تلاش کنید.');
        } else if (err.status === 401 || err.status === 403) {
          localStorage.removeItem('token');
          localStorage.setItem('isLoggedIn', 'false');
          this.router.navigateByUrl('/login');
        }
      },
    });
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePage();
    console.log(this.pagedItems);
  }

  updatePage() {
    this.pagedItems = this.history.slice(this.first, this.first + this.rows);
  }

  protected readonly localStorage = localStorage;
}

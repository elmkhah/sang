import { Component } from '@angular/core';
import { Master } from '../../service/master';
import { SkeletonModule } from 'primeng/skeleton';
import moment from 'moment-jalaali';
import {ChangeDetectorRef} from '@angular/core';
import {PaginatorModule} from 'primeng/paginator';
@Component({
  selector: 'app-testhistory',
  standalone: true,
  imports: [SkeletonModule, PaginatorModule],
  templateUrl: './testhistory.html',
  styleUrl: './testhistory.css'
})
export class Testhistory {

  history: any[] = [];
  pagedItems: any[] = [];
  isLoading = false;
  count = 0;
  rows = 5;
  first=0;


  constructor(public master: Master,public changeDetector: ChangeDetectorRef) {}

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
        this.updatePage()
        console.log(this.pagedItems);
        this.changeDetector.detectChanges();
      },
      error: (err) => {
        console.error('خطا در دریافت تاریخچه تست:', err);
        this.isLoading = false;
        this.changeDetector.detectChanges();
      }
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

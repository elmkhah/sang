import { Component } from '@angular/core';
import { Master } from '../../service/master';
import { SkeletonModule } from 'primeng/skeleton';
import { ChangeDetectorRef } from '@angular/core';
import moment from 'moment-jalaali';
import { Router } from '@angular/router';
import { Pupup } from './pupup/pupup';

@Component({
  selector: 'app-test',
  imports: [SkeletonModule, Pupup],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  constructor(
    public master: Master,
    public changeDetectorRef: ChangeDetectorRef,
    public router: Router,
  ) {}
  isLoading = false;
  testlist: any = [];
  testhistory: any = [];
  isModalOpen = false;
  selectedItem: any;

  dateShamsi = '';

  ngOnInit() {
    this.isLoading = true;
    this.master.testHistory().subscribe((hisList) => {
      this.testhistory = hisList.body;

      for (let i of this.testhistory) {
        i.date = moment(i.date).format('HH:mm jYYYY/jMM/jDD ');
      }
      this.testhistory.sort((a: any, b: any) => b.id - a.id);
      this.testhistory = this.testhistory.slice(0, 3);

      this.changeDetectorRef.detectChanges();

      this.master.testList().subscribe((List) => {
        this.testlist = List.body;
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  protected readonly localStorage = localStorage;
  protected readonly history = history;
}

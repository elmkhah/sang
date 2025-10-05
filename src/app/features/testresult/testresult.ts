import { Component } from '@angular/core';
import { Master } from '../../service/master';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-testresult',
  imports: [RouterLink],
  templateUrl: './testresult.html',
  styleUrl: './testresult.css',
})
export class Testresult {
  constructor(
    public master: Master,
    public changeDetector: ChangeDetectorRef,
  ) {}
  testResul!: any;
  protected readonly localStorage = localStorage;
  url = '/blog/article/';

  ngOnInit() {
    this.master.testHistory().subscribe((testResult) => {
      console.log(testResult);
      this.testResul = testResult.body.slice(
        testResult.body.length - 1,
        testResult.body.length,
      );
      console.log(this.testResul);
      // this.url += this.testResul[0].result;
      this.url += '/gad';
      this.changeDetector.detectChanges();
    });
  }
}

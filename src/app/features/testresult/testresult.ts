import { Component } from '@angular/core';
import {Master} from '../../service/master';
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-testresult',
  imports: [],
  templateUrl: './testresult.html',
  styleUrl: './testresult.css'
})
export class Testresult {
  constructor(public master: Master,public changeDetector: ChangeDetectorRef) {}
  testResul!:any
  protected readonly localStorage = localStorage;

  ngOnInit() {
    this.master.testHistory().subscribe(testResult => {
      this.testResul = testResult.body.slice(testResult.body.length-1, testResult.body.length);
      this.changeDetector.detectChanges();
      })
  }

}

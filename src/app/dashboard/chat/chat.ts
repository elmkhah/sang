import { Component, ViewChild } from '@angular/core';
import { Master } from '../../service/master';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  @ViewChild('bottom') bottom!: ElementRef;

  history: any = [];
  isLoading = false;

  constructor(
    public master: Master,
    public changeDetectorRef: ChangeDetectorRef,
  ) {}
  protected readonly localStorage = localStorage;

  ngOnInit() {
    this.isLoading = true;
    this.master.chathistory(100).subscribe({
      next: (res) => {
        this.history = res.body;
        console.log(this.history);
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
        this.bottom.nativeElement.scrollIntoView({ behavior: 'smooth' });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

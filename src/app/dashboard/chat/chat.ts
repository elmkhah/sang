import { Component, ViewChild } from '@angular/core';
import { Master } from '../../service/master';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { Dashnav } from '../../component/dashnav/dashnav';
import { ElementRef } from '@angular/core';
import moment from 'moment-jalaali';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, Dashnav],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  @ViewChild('bottom') bottom!: ElementRef;

  history: any = [];
  isLoading = false;
  input = '';

  constructor(
    public master: Master,
    public changeDetectorRef: ChangeDetectorRef,
  ) {}
  protected readonly localStorage = localStorage;

  ngOnInit() {
    this.isLoading = true;
    this.getMessages();
  }

  getMessages() {
    this.master.chathistory(100).subscribe({
      next: (res) => {
        this.history = res.body;
        console.log(this.history);

        for (let i of this.history) {
          i.date = moment(i.date).format('HH:mm jYYYY/jMM/jDD ');
        }
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
        this.bottom.nativeElement.scrollIntoView({ behavior: 'smooth' });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  sendMessage() {
    this.master.chatbot(this.input).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('coin', res.body.coin);
        this.input = '';
        this.getMessages();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

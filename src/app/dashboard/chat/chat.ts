import { Component, HostListener, ViewChild } from '@angular/core';
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
  txt = '';

  constructor(
    public master: Master,
    public changeDetectorRef: ChangeDetectorRef,
  ) {}
  protected readonly localStorage = localStorage;

  ngOnInit() {
    this.isLoading = true;
    this.getMessages();
  }

  @HostListener('document:keydown.enter', ['$event'])
  handleEnter(event: any) {
    (event as KeyboardEvent).preventDefault();
    this.sendMessage();
  }

  getMessages() {
    this.master.chathistory(30).subscribe({
      next: (res) => {
        this.history = res.body;

        for (let i of this.history) {
          i.date = moment(i.date).format('HH:mm jYYYY/jMM/jDD ');
        }
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
        this.bottom.nativeElement.scrollIntoView({ behavior: 'smooth' });
      },
      error: (error) => {},
    });
  }

  sendMessage() {
    this.txt = this.input;
    this.input = '';
    this.history.push({
      chatID: 10000,
      userInput: this.txt,
      chatResponse: '...',
      date: moment().format('HH:mm jYYYY/jMM/jDD '),
      user: '',
    });

    this.changeDetectorRef.detectChanges();
    this.bottom.nativeElement.scrollIntoView({ behavior: 'smooth' });

    this.master.chatbot(this.txt).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('coin', res.body.coin);
        this.getMessages();
        this.changeDetectorRef.detectChanges();
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.bottom.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}

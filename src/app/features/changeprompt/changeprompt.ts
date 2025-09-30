import { Component } from '@angular/core';
import { Master } from '../../service/master';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Dashnav } from '../../component/dashnav/dashnav';

@Component({
  selector: 'app-changeprompt',
  imports: [ReactiveFormsModule, RouterLink, FormsModule, Dashnav],
  templateUrl: './changeprompt.html',
  styleUrl: './changeprompt.css',
})
export class Changeprompt {
  description: any;
  isStaff = false;
  constructor(
    public master: Master,
    public changeDetectorRef: ChangeDetectorRef,
    public router: Router,
  ) {}

  ngOnInit() {
    this.master.profile().subscribe({
      next: (data: any) => {
        console.log(data);
        this.isStaff = data.body.is_staff;
        this.changeDetectorRef.detectChanges();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submit() {
    this.master.changePrompt(this.description).subscribe({
      next: (data: any) => {
        this.description = '';
        alert('پرامپت با موفقیت تغییر کرد');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  protected readonly localStorage = localStorage;
}

import { Component } from '@angular/core';
import { Master } from '../../service/master';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-changeprompt',
  imports: [ReactiveFormsModule, RouterLink, FormsModule],
  templateUrl: './changeprompt.html',
  styleUrl: './changeprompt.css',
})
export class Changeprompt {
  description: any;
  isStaff = false;
  constructor(
    public master: Master,
    public changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.master.profile().subscribe({
      next: (data: any) => {
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

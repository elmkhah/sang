import { Component } from '@angular/core';
import { Master } from '../../service/master';
import moment from 'moment-jalaali';
import { ChangeDetectorRef } from '@angular/core';
import { Dashnav } from '../../component/dashnav/dashnav';

@Component({
  selector: 'app-profile',
  imports: [Dashnav],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(
    private master: Master,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}
  profile!: any;

  ngOnInit() {
    this.master.profile().subscribe({
      next: (user) => {
        user.body.signup_date = moment(user.body.signup_date).format(
          'jYYYY/jMM/jDD HH:mm',
        );
        this.profile = user.body;
        this.changeDetectorRef.detectChanges();
      },
    });
  }
}

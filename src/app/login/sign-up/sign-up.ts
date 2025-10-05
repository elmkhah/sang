import { Component, HostListener, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { Master } from '../../service/master';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, Button, FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  constructor(
    public master: Master,
    public router: Router,
  ) {}

  email = '';
  name = '';
  password = '';
  isLoading = signal(false);

  loginClick() {
    if (this.email != '' && this.password != '' && this.name != '') {
      this.isLoading.set(true);
      this.master.signup(this.name, this.email, this.password).subscribe({
        next: (data: any) => {
          this.isLoading.set(false);
          alert('ثبت نام با موفقیت انجام شد');
          this.router.navigateByUrl('/login');
        },
        error: (err: any) => {
          alert('ایمیل وارد شده تکراری است');
          this.password = '';
          this.email = '';
          this.name = '';
          this.isLoading.set(false);
        },
      });
    }
  }
}

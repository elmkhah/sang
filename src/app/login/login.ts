import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { Master } from '../service/master';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, Button, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(
    private master: Master,
    public router: Router,
  ) {}
  email = '';
  password = '';
  isLoading = signal(false);

  ngOnInit() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.loginClick();
      }
    });
  }

  loginClick() {
    if (this.email != '' || this.password != '') {
      this.isLoading.set(true);
      this.master.login(this.email, this.password).subscribe({
        next: (data) => {
          if (data.status == 200) {
            localStorage.clear();
            localStorage.setItem('name', data.body.user.name);
            localStorage.setItem('token', data.body.user.token);
            localStorage.setItem('coin', data.body.user.coin);
            localStorage.setItem('isLoggedIn', 'true');
            this.isLoading.set(false);
            // localStorage.setItem('isStaff',);
            this.router.navigateByUrl('/dashboard/home');
          } else {
            alert('یه مشکلی داریم');
            this.isLoading.set(false);
          }
        },
        error: (err) => {
          this.isLoading.set(false);
          alert('نام کاربری یا رمز عبور اشتباهه');
        },
      });
    }
  }
}

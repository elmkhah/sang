import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Master } from '../../service/master';
import { Dashnav } from '../../component/dashnav/dashnav';

@Component({
  selector: 'app-home',
  imports: [Button, RouterLink, TagModule, Dashnav],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(
    public router: Router,
    public master: Master,
  ) {}

  protected readonly localStorage = localStorage;

  menu = false;
  isBlogAdmin = false;
  isPromptAdmin = false;
  isLoading = signal(false);

  showMenu() {
    this.menu = !this.menu;
  }

  ngOnInit() {
    this.isLoading.set(true);
    this.master.profile().subscribe({
      next: (data) => {
        console.log(data);
        localStorage.setItem('coin', data.body.coin);
        this.isBlogAdmin = data.body.is_blog_staff;
        this.isPromptAdmin = data.body.is_prompt_staff;
        this.isLoading.set(false);
      },
      error: (err) => {
        if (err.status === 401) {
          localStorage.removeItem('token');
          localStorage.setItem('isLoggedIn', 'false');
          this.router.navigateByUrl('/login');
        } else {
          alert(err.message);
        }
      },
    });
  }
}

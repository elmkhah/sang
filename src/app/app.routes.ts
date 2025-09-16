import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Home } from './dashboard/home/home';
import { Chat } from './dashboard/chat/chat';
import { Test } from './dashboard/test/test';
import { Profile } from './dashboard/profile/profile';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { Teststart } from './dashboard/teststart/teststart';
import { Testresult } from './features/testresult/testresult';
import { authGuard } from './auth.guard';
import { Blog } from './dashboard/blog/blog';
import { Article } from './features/article/article';
import { Articlelist } from './features/articlelist/articlelist';
import { Testhistory } from './features/testhistory/testhistory';
import { Addarticle } from './features/addarticle/addarticle';
import { Changeprompt } from './features/changeprompt/changeprompt';

export const routes: Routes = [
  { path: '', component: Landing, pathMatch: 'full' },
  { path: 'changeprompt', component: Changeprompt },
  { path: 'addarticle', component: Addarticle },
  {
    path: 'blog',
    children: [
      { path: '', component: Articlelist, pathMatch: 'full' },
      { path: 'article/:articleId', component: Article },
    ],
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
    children: [
      { path: 'chat', component: Chat },
      { path: 'profile', component: Profile },
      {
        path: 'test',
        children: [
          { path: '', component: Test },
          { path: 'testhistory', component: Testhistory },
          { path: 'teststart/:testName', component: Teststart },
          { path: 'result', component: Testresult },
        ],
      },

      { path: 'home', component: Home },
    ],
  },

  { path: 'login', component: Login },
  { path: '**', component: Landing, pathMatch: 'full' },
];

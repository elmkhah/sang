import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Hero } from '../../features/articlelist/hero/hero';
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job',
  imports: [Nav, Hero, Footer, RouterLink],
  templateUrl: './job.html',
  styleUrl: './job.css',
})
export class Job {
  cards = [
    {
      title: 'BackEnd Developer',
      description: 'Django , Sql , python , restfull API',
    },
    { title: 'FrontEnd Developer', description: 'JS, Ts, Angular, Tailwind' },
    {
      title: 'Prompt Engineer',
      description: 'write a prompt for Any LLM like ChatGPT,DeepSeek and...',
    },
    { title: 'UI/UX designer', description: 'Figma,Photoshop' },
  ];
}

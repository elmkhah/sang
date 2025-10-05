import { Component } from '@angular/core';
import { Hero } from '../../features/articlelist/hero/hero';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { Personcard } from '../personcard/personcard';

@Component({
  selector: 'app-about',
  imports: [Hero, Nav, Footer, Personcard],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  team = [
    {
      name: 'سید مجتبی میرسلیمانی',
      avatar: 'image/avatar/semir.jpg',
      role: 'CEO - Backend Developer',
      description: 'سیدمون :)',
      linkedin: 'https://www.linkedin.com/in/seyed-mojtaba-mirsoleimani/',
      mail: 'seyedmojtabamirsoleimani@gmail.com',
      color: '#124112',
      telegram: 'https://t.me/semir_tkd',
      english: 'seyedmojtaba mirsoleimani',
      phone: '09140917973',
    },

    {
      name: 'محمد علی علم خواه',
      avatar: 'image/avatar/elm.jpg',
      description: 'عَلَم تیم',
      color: '#bb5f53',
      linkedin: 'https://www.linkedin.com/in/mohammadali-elmkhah/',
      english: 'mohammadali elmkhah',
      role: 'Frontend Developer',
      mail: 'aaaelmkhah@gmail.com',
      telegram: 'https://t.me/elmkhah_ir',
      phone: '09189020051',
    },

    {
      name: 'امیرمحمد براری',
      avatar: 'image/avatar/barari.jpg',
      description: 'آخرِ فرانت',
      linkedin: 'sad',
      color: 'red-200',
      mail: '',
      role: 'Frontend Developer',
      telegram: 'https://t.me/Lo0111011001100101',
      english: 'amirmohammad Barari',
      phone: '',
    },

    {
      name: 'امیرمحمد بهارلو',
      avatar: 'image/avatar/bahar.jpg',
      description: 'عزززیزم!',
      linkedin:
        'https://www.linkedin.com/in/amirmohammadbaharloo/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BrFuo5Yo0TiWGnb73qDkMnQ%3D%3D',
      role: 'Prompt Engineer',
      color: 'red-200',
      english: 'amirmohammad baharloo',
      mail: '',
      telegram: 'https://t.me/AghoyMohandesss',
      phone: '',
    },

    {
      name: 'محمد امین عابدی',
      avatar: 'image/avatar/amin.jpg',
      description: 'درِ قابلمه رو بگیر',
      linkedin: 'sad',
      mail: '',
      role: 'Financial expert',
      english: 'mohammadAmin Abedi',
      color: '#f87171',
      telegram: 'https://t.me/m_a_abedii',
      phone: '',
    },

    {
      name: 'عرشیا عطایی',
      avatar: 'image/avatar/arshia.jpg',
      description: 'پزشک شهر',
      linkedin: 'https://www.linkedin.com/',
      english: 'arshia Ataei',
      color: 'red-600',
      role: 'R&D',
      mail: 'arshia.ata@gmail.com',
      telegram: 'https://t.me/ArshiaBD',
      phone: '09139020742',
    },

    {
      name: 'علی خدادوستان',
      avatar: 'image/avatar/ali.jpg',
      description: 'خدامون',
      linkedin: 'https://www.linkedin.com/',
      role: 'UI/UX Designer',
      color: 'red-200',
      mail: 'khodadoostan@gmail.com',
      telegram: 'https://t.me/alikhodadoostan',
      phone: '09135431212',
      english: 'ali khodadoostan',
    },
  ];
}

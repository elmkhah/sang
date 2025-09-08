import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideQuillConfig } from 'ngx-quill';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideZonelessChangeDetection(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
        },
      },
    }),
    provideHttpClient(),
    provideQuillConfig({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'], // استایل‌های ساده
          [{ list: 'ordered' }, { list: 'bullet' }], // لیست‌ها
          ['link', 'image'], // لینک و تصویر
        ],
      },
      theme: 'snow',
    }),
  ],
};

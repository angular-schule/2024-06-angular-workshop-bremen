import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localeDe);
console.log(localeDe);

export const appConfig: ApplicationConfig = {
  providers: [

    // provideZoneChangeDetection({ eventCoalescing: true }),
    // das hier bitte nicht auf Prod einsetzen! (nerds freuen sich)
    provideExperimentalZonelessChangeDetection(),

    provideRouter(routes),

    { provide: LOCALE_ID, useValue: 'de' },

    provideHttpClient()

  ]
};

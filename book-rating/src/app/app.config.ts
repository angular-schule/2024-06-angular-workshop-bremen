import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [

    // provideZoneChangeDetection({ eventCoalescing: true }),
    // das hier bitte nicht auf Prod einsetzen! (nerds freuen sich)
    provideExperimentalZonelessChangeDetection(),

    provideRouter(routes)]
};

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'loadComponent/:myInput',
    loadComponent: () => import('./load-me/load-me.component')
  },
  {
    path: 'loadChildren',
    loadChildren: () => import('./child.routes')
  }
];

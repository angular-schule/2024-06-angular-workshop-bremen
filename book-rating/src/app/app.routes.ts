import { Routes } from '@angular/router';
import { DashboardComponent } from './books/dashboard/dashboard.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: DashboardComponent },
  { path: 'books/:isbn', component: BookDetailsComponent },
  // { path: '**', component: NotFoundComponent },
];

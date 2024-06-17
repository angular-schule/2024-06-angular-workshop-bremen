import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // 🦆
  books: Book[] = [{
    isbn: '000',
    title: 'jQuery',
    description: 'Altes Buch',
    rating: 1
  }, {
    isbn: '111',
    title: 'AngularJS',
    description: 'Solides Buch',
    rating: 3
  }, {
    isbn: '222',
    title: 'Angular',
    description: 'Beste Buch der Welt',
    rating: 5
  }];

}

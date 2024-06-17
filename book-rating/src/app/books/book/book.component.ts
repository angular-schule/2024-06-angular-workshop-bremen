import { Component, input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  // klassischer Stil - mit Decorator
  // @Input({ required: true }) book: Book | undefined;

  // NEU: Input Signals (Developer Preview)
  book = input.required<Book>();
}

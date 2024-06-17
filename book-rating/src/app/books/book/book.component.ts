import { Component, input } from '@angular/core';
import { Book } from '../shared/book';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgClass],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  // klassischer Stil - mit Decorator
  // @Input({ required: true }) book: Book | undefined;

  // NEU: Input Signals (Developer Preview)
  book = input.required<Book>();
}

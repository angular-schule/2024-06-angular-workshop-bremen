import { Component, input, computed, Output, EventEmitter, output } from '@angular/core';
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

  tollesBuch = computed(() => this.book().title === 'Angular')



  // Klassischer Stil
  // @Output() rateUp = new EventEmitter<Book>();
  // @Output() rateDown = new EventEmitter<Book>();

  // NEU: Output Signals
  rateUp = output<Book>();
  rateDown = output<Book>();

  doRateUp() {
    this.rateUp.emit(this.book());
  }

  doRateDown() {
    this.rateDown.emit(this.book());
  }
}

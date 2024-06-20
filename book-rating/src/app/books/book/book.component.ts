import { Component, input, computed, Output, EventEmitter, output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { CurrencyPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgClass, CurrencyPipe, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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

  log() {
    console.log('Change Detection!',  +new Date());
  }
}

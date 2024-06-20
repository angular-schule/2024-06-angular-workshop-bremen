import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import { BookCreateComponent } from '../book-create/book-create.component';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, BookComponent, BookCreateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  // Alter Stil: constructor(private bookRatingService: BookRatingService) {}

  // Neuer Stil mit inject() --> siehe Artikel
  bookRatingService = inject(BookRatingService);
  bookStoreService = inject(BookStoreService);

  books = signal<Book[]>([]);

  constructor() {
    // TODO: subscribe ist doof! 😁
    // TODO: add error handling
    // TODO: codegen
    // und sowieso
    this.bookStoreService.getAllBooks().subscribe(
      books => this.books.set(books)
    );
  }

  doRateUp(book: Book) {
    const ratedBook = this.bookRatingService.rateUp(book);

    // const ratedBook = {
    //   ...book,
    //   rating: Math.min(book.rating + 1, 5)
    // }

    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.bookRatingService.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {
    const updatedBooks = this.books()
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a,b) => b.rating - a.rating);

    this.books.set(updatedBooks);

    // ODER Update

    // this.books.update(books => books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a,b) => b.rating - a.rating));
  }

  addBook(newBook: Book) {

    // mit set
    const newArray = [...this.books(), newBook].sort((a, b) => b.rating - a.rating);
    this.books.set(newArray);

    // ODER mit update
    // this.books.update(x => [...x, newBook].sort((a, b) => b.rating - a.rating));
  }
}

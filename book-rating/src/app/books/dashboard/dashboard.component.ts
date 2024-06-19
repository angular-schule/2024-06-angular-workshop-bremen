import { Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, UpperCasePipe } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // Alter Stil: constructor(private bookRatingService: BookRatingService) {}

  // Neuer Stil mit inject() --> siehe Artikel
  bookRatingService = inject(BookRatingService);

  // 🦆
  books = signal<Book[]>([{
    isbn: '000',
    title: 'jQuery',
    description: 'Altes Buch',
    rating: 5,
    price: 42.9
  }, {
    isbn: '111',
    title: 'AngularJS',
    description: 'Solides Buch',
    rating: 3,
    price: 30.9
  }, {
    isbn: '222',
    title: 'Angular',
    description: 'Beste Buch der Welt',
    rating: 1,
    price: 20.9
  }]);

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
}

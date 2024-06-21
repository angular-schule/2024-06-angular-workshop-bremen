import { JsonPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, concatMap, map, mergeMap, of, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink, JsonPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  // isbn = input<string>();

  router = inject(ActivatedRoute);
  bookStore = inject(BookStoreService);

  book = toSignal(this.router.paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    switchMap(isbn => this.bookStore.getSingleBook(isbn).pipe(
      catchError((err: HttpErrorResponse) => of({
        title: 'FEHLER',
        description: err.message
      }))
    )),
  ));

}

import { JsonPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

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

  book$ = toSignal(this.router.paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    mergeMap(isbn => this.bookStore.getSingleBook(isbn))
  ));

}

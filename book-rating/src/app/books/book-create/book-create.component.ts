import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', { nonNullable: true }),
    title: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
  });

}

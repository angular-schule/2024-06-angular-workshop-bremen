import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCreateComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('xxx', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    description: new FormControl('', {
      nonNullable: true
    }),
    rating: new FormControl(1, {
      nonNullable: true,
      validators: [Validators.min(1), Validators.max(5)]
    })
  });

  c = this.bookForm.controls;

  isInvalid(control: FormControl) {
    return control.invalid && control.touched;
  }

  hasError(control: FormControl, errorCode: string) {
    return control.hasError(errorCode) && control.touched;
  }

  submitForm() {

    const newBook = {
      ...this.bookForm.getRawValue(),
      price: 1
    };

    console.log(newBook);

    // Gruppenarbeit
    // 1. Erzeuge ein Event mit dem Namen create
    // 2. Versende das neue Buch
    // 3. Aboniere das Event im Dashbard
    // 4. Füge das neue Buch dem Buch-Array hinzu

    this.bookForm.reset();
  }

}

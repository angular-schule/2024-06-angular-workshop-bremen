import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-load-me3',
  standalone: true,
  imports: [],
  templateUrl: './load-me3.component.html',
  styleUrl: './load-me3.component.scss'
})
export class LoadMe3Component {
  myInput = input<string>();

  showRemoveMe = input(false);
  removeMe = output();
}

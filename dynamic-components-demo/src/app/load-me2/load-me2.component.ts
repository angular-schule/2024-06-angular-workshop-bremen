import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-load-me2',
  standalone: true,
  imports: [],
  templateUrl: './load-me2.component.html',
  styleUrl: './load-me2.component.scss'
})
export class LoadMe2Component {
  myInput = input<string>();

  showRemoveMe = input(false);
  removeMe = output();
}

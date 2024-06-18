import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-load-me',
  standalone: true,
  imports: [],
  templateUrl: './load-me.component.html',
  styleUrl: './load-me.component.scss'
})
export class LoadMeComponent {
  myInput = input<string>();

  showRemoveMe = input(false);
  removeMe = output();
}

export default LoadMeComponent;


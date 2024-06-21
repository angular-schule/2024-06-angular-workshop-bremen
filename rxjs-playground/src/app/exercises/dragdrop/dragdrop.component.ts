import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, concatMap, takeUntil, map } from 'rxjs';

@Component({
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss'],
  standalone: true
})
export class DragdropComponent {

  @ViewChild('target', { static: true }) target!: ElementRef<HTMLElement>;

  mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');
  // mouseDown$ = fromEvent<MouseEvent>(this.target.nativeElement, 'mousedown');
  mouseDown$ = fromEvent<MouseEvent>(document, 'mousedown');
  mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');

  targetPosition = toSignal(this.mouseDown$.pipe(
    concatMap(() => this.mouseMove$.pipe(takeUntil(this.mouseUp$))),
    map(event => {
      const offset = 50;
      return {
        x: event.pageX - offset,
        y: event.pageY - offset
      }
    })
  ), { initialValue: { x: 100, y: 80 } });
}

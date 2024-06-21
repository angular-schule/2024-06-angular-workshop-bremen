import { Component, OnDestroy, inject } from '@angular/core';
import { AsyncPipe, DecimalPipe, JsonPipe } from '@angular/common';
import { Subject, BehaviorSubject, ReplaySubject, Observable, share, takeUntil, shareReplay } from 'rxjs';

import { MeasureValuesService } from './measure-values.service';
import { HistoryComponent } from '../../shared/history/history.component';

@Component({
  templateUrl: './multicast.component.html',
  standalone: true,
  imports: [HistoryComponent, AsyncPipe, DecimalPipe, JsonPipe]
})
export class MulticastComponent implements OnDestroy {

  private mvs = inject(MeasureValuesService);

  listeners: number[] = [];
  logStream$ = new ReplaySubject<string>();
  private destroy$ = new Subject<void>();
  private listenerIndex = 1;

  measureValues$: Observable<number>; // später: Subject<number>;

  constructor() {
    /**************!!**************/

    // cold! 🧊
    // this.measureValues$ = this.mvs.getValues();

    // hot! 🔥
    // this.measureValues$ = this.mvs.getValues().pipe(share())

    // hot - mit Cache! 🔥
    this.measureValues$ = this.mvs.getValues().pipe(shareReplay({
      refCount: true,
      bufferSize: 1
    }));

    /**************!!**************/

  }

  addListener() {
    this.listeners.push(this.listenerIndex++);
  }

  addConsoleListener() {
    const index = this.listenerIndex++;
    this.measureValues$.pipe(takeUntil(this.destroy$)).subscribe(e => this.logStream$.next(`Listener #${index}: ${e}`));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}

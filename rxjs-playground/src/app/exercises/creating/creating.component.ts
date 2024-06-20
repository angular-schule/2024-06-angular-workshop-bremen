import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';
import { HistoryComponent } from '../../shared/history/history.component';

@Component({
  templateUrl: './creating.component.html',
  standalone: true,
  imports: [HistoryComponent]
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<unknown>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // PUSH STATT PULL PRINZIP

    const observer = {
      next: (e: number) => this.log(e),
      error: (err: any) => this.log('ERROR ' + err),
      complete: () => this.log('COMPLETE')
    };

    // const observable = of('😎', '😻', '🤩');
    const observable = interval(1000);

    const subscription = observable.subscribe(observer);

    setTimeout(() => subscription.unsubscribe(), 1000 * 5);

    // wenn ihr wollt: Subscriber, Producer, Subject


    /******************************/
  }

  private log(msg: unknown) {
    this.logStream$.next(msg);
  }

}

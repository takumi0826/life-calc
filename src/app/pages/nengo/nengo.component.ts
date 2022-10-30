import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-nengo',
  templateUrl: './nengo.component.html',
  styleUrls: ['./nengo.component.scss'],
})
export class NengoComponent {
  reiwa = [...Array(5).keys()];
  heisei = [...Array(31).keys()];
  showa = [...Array(64).keys()];
  nengoSelect$ = new BehaviorSubject<number>(1);
  yearArray$ = this.nengoSelect$.pipe(
    distinctUntilChanged(),
    map((val) => {
      if (val === 1) {
        return this.showa;
      } else if (val === 2) {
        return this.heisei;
      } else {
        return this.reiwa;
      }
    })
  );

  constructor() {}
}

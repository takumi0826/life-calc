import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  map,
} from 'rxjs';
import { PageConst } from 'src/app/constants/page.const';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent {
  people$ = new BehaviorSubject<number>(1);
  price$ = new BehaviorSubject<number>(10000);
  stay$ = new BehaviorSubject<number>(1);
  holiday$ = new BehaviorSubject<number>(0);
  isTraffic$ = new BehaviorSubject<boolean>(false);
  priceControl = new FormControl(this.price$.getValue(), Validators.min(5000));

  // 旅行支援額
  discount$ = combineLatest([
    this.people$,
    this.price$,
    this.isTraffic$,
    this.stay$,
  ]).pipe(
    distinctUntilChanged(),
    map(([people, price, isTraffic, stay]) => {
      const m = (price / people / stay) * 0.4;
      console.log(m);

      const limit = isTraffic ? 8000 : 5000;
      return m > limit
        ? Math.floor((limit * stay * people) / 100) * 100
        : Math.floor((m * stay * people) / 100) * 100;
    })
  );
  // 地域クーポン
  coupon$ = combineLatest([
    this.stay$.pipe(map((stay) => (stay >= 7 ? 7 : stay))),
    this.holiday$.pipe(map((holiday) => (holiday >= 7 ? 7 : holiday))),
    this.people$,
  ]).pipe(
    distinctUntilChanged(),
    map(([stay, holiday, people]) => {
      const weekday = stay - holiday;
      return (holiday * 1000 + weekday * 3000) * people;
    })
  );

  total$ = combineLatest([this.discount$, this.coupon$]).pipe(
    distinctUntilChanged(),
    map(([discount, coupon]) => discount + coupon)
  );
  constructor(private appService: AppService) {}

  addPeople() {
    const val = this.people$.getValue();
    this.people$.next(val + 1);
  }

  removePeople() {
    const val = this.people$.getValue();
    if (val <= 1) return;
    this.people$.next(val - 1);
  }

  addHoliday() {
    const val = this.holiday$.getValue();
    if (val >= this.stay$.getValue()) return;
    this.holiday$.next(val + 1);
  }

  removeHoliday() {
    const val = this.holiday$.getValue();
    if (val <= 0) return;
    this.holiday$.next(val - 1);
  }
}

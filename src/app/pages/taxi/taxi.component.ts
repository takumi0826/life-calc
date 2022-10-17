import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  debounceTime,
  map,
} from 'rxjs';
import { TaxService } from 'src/app/services/tax.service';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html',
  styleUrls: ['./taxi.component.scss'],
})
export class TaxiComponent {
  readonly distance$ = new BehaviorSubject<number>(3);
  readonly price$ = new BehaviorSubject<number>(3000000);

  constructor(private taxService: TaxService) {}
}

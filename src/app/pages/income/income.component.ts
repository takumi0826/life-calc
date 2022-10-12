import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  filter,
  map,
  withLatestFrom,
} from 'rxjs';
import { TaxService } from 'src/app/services/tax.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent {
  readonly price$ = new BehaviorSubject<number>(3000000);
  readonly otherDeduction$ = new BehaviorSubject<number>(0);
  readonly transPrice$ = combineLatest([
    this.price$,
    this.otherDeduction$,
  ]).pipe(
    filter(([val]) => Number.isInteger(val)),
    debounceTime(300),
    map(([val, deduction]) => [val, deduction])
  );
  /** 給与所得控除額 */
  readonly incomeDeduction$ = this.transPrice$.pipe(
    map(([val]) => Math.floor(this.taxService.getGrossIncomeDeduction(val)))
  );
  /** 基礎控除 */
  readonly basicDeduction$ = this.transPrice$.pipe(
    map(([val]) => Math.floor(this.taxService.getBasicDeduction(val, false)))
  );
  /** 給与所得 */
  readonly grossIncome$ = this.transPrice$.pipe(
    map(([val]) => Math.floor(this.taxService.getGrossIncome(val)))
  );
  /** 課税対象所得 */
  readonly income$ = this.transPrice$.pipe(
    map(([val, deduction]) =>
      Math.floor(this.taxService.getIncome(val, deduction, false))
    )
  );
  /** 所得税 */
  readonly incomeTax$ = this.income$.pipe(
    map((income) => {
      return Math.floor(this.taxService.getIncomeTax(income));
    })
  );
  constructor(private taxService: TaxService) {}
}

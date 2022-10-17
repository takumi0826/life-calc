import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  debounceTime,
  map,
  combineLatest,
  withLatestFrom,
} from 'rxjs';
import { TaxService } from 'src/app/services/tax.service';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss'],
})
export class ResidentsComponent {
  /** 年収 */
  readonly price$ = new BehaviorSubject<number>(3000000);
  /** 所得控除 */
  readonly otherDeduction$ = new BehaviorSubject<number>(0);
  readonly transPrice$ = combineLatest([
    this.price$,
    this.otherDeduction$,
  ]).pipe(
    filter(
      ([val, deduction]) => Number.isInteger(val) && Number.isInteger(deduction)
    ),
    debounceTime(300),
    map(([val, deduction]) => [val, deduction])
  );
  /** 給与所得控除額 */
  readonly incomeDeduction$ = this.transPrice$.pipe(
    map(([val]) => Math.floor(this.taxService.getGrossIncomeDeduction(val)))
  );
  /** 基礎控除 */
  readonly basicDeduction$ = this.transPrice$.pipe(
    map(([val]) => Math.floor(this.taxService.getBasicDeduction(val, true)))
  );
  /** 給与所得 */
  readonly grossIncome$ = this.transPrice$.pipe(
    map(([val]) => Math.floor(this.taxService.getGrossIncome(val)))
  );
  /** 課税所得金額 */
  readonly income$ = this.transPrice$.pipe(
    map(([val, deduction]) =>
      Math.floor(this.taxService.getIncome(val, deduction, true))
    )
  );
  /** 住民税 */
  readonly residentsTax$ = this.income$.pipe(
    map((income) => Math.floor(this.taxService.getResidentsTax(income)))
  );
  // /** ふるさと納税 */
  // readonly getHometownTax$ = this.transPrice$.pipe(
  //   map(([val]) => Math.floor(this.taxService.getHometownTax(val)))
  // );

  constructor(private taxService: TaxService) {}

  autoDeduction() {
    const val = Math.floor(
      this.taxService.getSocialInsurance(this.price$.getValue())
    );
    this.otherDeduction$.next(val);
  }
}

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, filter, map } from 'rxjs';
import { TaxService } from 'src/app/services/tax.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {
  readonly price$ = new BehaviorSubject<number>(3000000);
  readonly transPrice$ = this.price$.pipe(
    filter((val) => Number.isInteger(val)),
    debounceTime(300),
    map((val) => Math.ceil(val))
  );
  /** 所得控除額 */
  readonly incomeDeduction$ = this.transPrice$.pipe(
    map((val) => Math.ceil(this.taxService.getIncomeDeduction(val)))
  );
  /** 基礎控除 */
  readonly basicDeduction$ = this.transPrice$.pipe(
    map((val) => Math.ceil(this.taxService.getBasicDeduction(val)))
  );
  /** 所得金額 */
  readonly income$ = this.transPrice$.pipe(
    map((val) => Math.ceil(this.taxService.getIncome(val)))
  );
  /** 所得税 */
  readonly incomeTax$ = this.transPrice$.pipe(
    map((val) => Math.ceil(this.taxService.getIncomeTax(val)))
  );
  constructor(private taxService: TaxService) {}

  ngOnInit(): void {}
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaxService {
  constructor() {}

  /** 所得控除額 */
  getIncomeDeduction(value: number) {
    if (!value) return 0;
    if (value <= 1625000) {
      return 550000;
    } else if (value >= 1625001 && value <= 1800000) {
      return value * 0.4 + 100000;
    } else if (value >= 1800001 && value <= 3600000) {
      return value * 0.3 + 80000;
    } else if (value >= 3600001 && value <= 6600000) {
      return value * 0.2 + 440000;
    } else if (value >= 6600001 && value <= 8500000) {
      return value * 0.1 + 1100000;
    } else {
      return 1950000;
    }
  }

  /** 基礎控除 */
  getBasicDeduction(value: number) {
    if (value <= 24000000) {
      return 480000;
    } else if (value >= 24000001 && value <= 24500000) {
      return 320000;
    } else if (value >= 24500001 && value <= 25000000) {
      return 160000;
    } else {
      return 0;
    }
  }

  /** 所得金額 */
  getIncome(value: number) {
    const m =
      value - this.getIncomeDeduction(value) - this.getBasicDeduction(value);
    return m > 0 ? m : 0;
  }

  /** 所得税 */
  getIncomeTax(value: number) {
    const amount = this.getIncome(value);
    console.log(`所得控除額: ${this.getIncomeDeduction(value)}`);
    console.log(`基礎控除額: ${this.getBasicDeduction(value)}`);
    console.log(`所得金額: ${amount}`);

    if (amount <= 1949000) {
      return amount * 0.05;
    } else if (amount >= 1950000 && amount < 3300000) {
      return amount * 0.1 - 97500;
    } else if (amount >= 3300000 && amount < 6950000) {
      return amount * 0.2 - 427500;
    } else if (amount >= 6950000 && amount < 9000000) {
      return amount * 0.23 - 636000;
    } else if (amount >= 9000000 && amount < 18000000) {
      return amount * 0.33 - 1536000;
    } else if (amount >= 18000000 && amount < 40000000) {
      return amount * 0.4 - 2796000;
    } else {
      return amount * 0.45 - 4796000;
    }
  }
}

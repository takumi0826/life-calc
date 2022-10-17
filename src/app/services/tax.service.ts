import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaxService {
  constructor() {}

  /**
   * 給与所得控除額
   * @param value 年収
   */
  getGrossIncomeDeduction(value: number) {
    if (!value) return 0;
    // if (value <= 1625000) {
    //   return 550000;
    // } else if (value >= 1625001 && value <= 1800000) {
    //   return Math.floor(value * 0.4) + 100000;
    // } else if (value >= 1800001 && value <= 3600000) {
    //   return Math.floor(value * 0.3) + 80000;
    // } else if (value >= 3600001 && value <= 6600000) {
    //   return Math.floor(value * 0.2) + 440000;
    // } else if (value >= 6600001 && value <= 8500000) {
    //   return Math.floor(value * 0.1) + 1100000;
    // } else {
    //   return 1950000;
    // }
    return value - this.getGrossIncome(value);
  }

  /**
   * 基礎控除
   * @param value 年収
   *  */
  getBasicDeduction(value: number, isResidentsTax: boolean) {
    if (value <= 24000000) {
      const tax = isResidentsTax ? 50000 : 0;
      return 480000 - tax;
    } else if (value >= 24000001 && value <= 24500000) {
      const tax = isResidentsTax ? 30000 : 0;
      return 320000 - tax;
    } else if (value >= 24500001 && value <= 25000000) {
      const tax = isResidentsTax ? 10000 : 0;
      return 160000 - tax;
    } else {
      return 0;
    }
  }

  /**
   * 給与所得
   * @param value 年収
   * */
  getGrossIncome(value: number) {
    if (!value) return 0;
    if (value >= 1 && value <= 550999) {
      return 0;
    } else if (value >= 551000 && value <= 1618999) {
      return value - 550000;
    } else if (value >= 1619000 && value <= 1619999) {
      return 1069000;
    } else if (value >= 1622000 && value <= 1621999) {
      return 1070000;
    } else if (value >= 1624000 && value <= 1627999) {
      return 1074000;
    } else if (value >= 1628000 && value <= 1799999) {
      const b = value / 4;
      return Math.floor(b / 1000) * 1000 * 2.4 + 100000;
    } else if (value >= 1800000 && value <= 3599999) {
      const b = value / 4;
      return Math.floor(b / 1000) * 1000 * 2.8 - 80000;
    } else if (value >= 3600000 && value <= 6599999) {
      const b = value / 4;
      return Math.floor(b / 1000) * 1000 * 3.2 - 440000;
    } else if (value >= 6600000 && value <= 8499999) {
      return value * 0.9 - 1100000;
    } else {
      return value - 1950000;
    }
  }

  /**
   * 課税対象所得
   * @param value 年収
   * @param deduction 所得控除
   * @param isResidentsTax 住民税か
   */
  getIncome(value: number, deduction: number, isResidentsTax: boolean) {
    // 給与所得 - 所得控除
    const m =
      this.getGrossIncome(value) -
      (deduction + this.getBasicDeduction(value, isResidentsTax));
    return m > 0 ? Math.floor(m / 1000) * 1000 : 0;
  }

  /**
   * 所得税
   * @param value 課税対象所得
   * */
  getIncomeTax(value: number) {
    if (value < 1950000) {
      return value * 0.05;
    } else if (value >= 1950000 && value < 3300000) {
      return value * 0.1 - 97500;
    } else if (value >= 3300000 && value < 6950000) {
      return value * 0.2 - 427500;
    } else if (value >= 6950000 && value < 9000000) {
      return value * 0.23 - 636000;
    } else if (value >= 9000000 && value < 18000000) {
      return value * 0.33 - 1536000;
    } else if (value >= 18000000 && value < 40000000) {
      return value * 0.4 - 2796000;
    } else {
      return value * 0.45 - 4796000;
    }
  }

  /**
   * 復興特別所得税
   * @param value 年収
   * */
  getSpecialIncomeTax(value: number) {
    return this.getIncomeTax(value) * 0.021;
  }

  /**
   * 住民税
   * @param value 課税対象所得
   * */
  getResidentsTax(value: number) {
    // const equality = value <= 450000 ? 0 : 5000;
    // return value * 0.1 + equality;
    return value * 0.1;
  }

  /**
   * 健康保険料
   * @param value 年収
   * */
  getHealthInsurance(value: number) {
    return (value * 0.0981) / 2;
  }

  /**
   * 厚生年金保険料
   * @param value 年収
   * */
  getWelfarePension(value: number) {
    return (value * 0.183) / 2;
  }

  /**
   * 社会保険料
   * @param value 年収
   * */
  getSocialInsurance(value: number) {
    return this.getHealthInsurance(value) + this.getWelfarePension(value);
  }

  /**
   * ふるさと納税
   * @param value 住民税
   * */
  getHometownTax(value: number) {
    const tax = (value - 5000) * 0.23559 + 2000;
    return Math.floor(tax / 1) * 1;
  }
}

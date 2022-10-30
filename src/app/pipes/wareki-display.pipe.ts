import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'warekiDisplay',
})
export class WarekiDisplayPipe implements PipeTransform {
  transform(item: number, val: number): string {
    const num = item + 1;
    if (val === 1) {
      return num === 1 ? '昭和元年' : `昭和${num}年`;
    } else if (val === 2) {
      return num === 1 ? '平成元年' : `平成${num}年`;
    } else {
      return num === 1 ? '令和元年' : `令和${num}年`;
    }
  }
}

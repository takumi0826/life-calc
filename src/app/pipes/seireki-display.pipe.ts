import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seirekiDisplay',
})
export class SeirekiDisplayPipe implements PipeTransform {
  transform(item: number, val: number): string {
    const num = item + 1;
    if (val === 1) {
      return `${1925 + num}年`;
    } else if (val === 2) {
      return `${1988 + num}年`;
    } else {
      return `${2018 + num}年`;
    }
  }
}

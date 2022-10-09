import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkLength',
})
export class CheckLengthPipe implements PipeTransform {
  transform(value: string, length: number): boolean {
    if (!value) return false;
    return value.length > length;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryType',
})
export class CategoryTypePipe implements PipeTransform {
  transform(values: any[]): string {
    const names = values.map((v) => v.child.name);
    return names.join('・') || 'その他';
  }
}

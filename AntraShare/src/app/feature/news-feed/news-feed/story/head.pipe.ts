import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'head',
})
export class HeadPipe implements PipeTransform {
  transform(value: string, length = 20): string {
    if (value.length <= length) {
      return value;
    } else {
      return value.slice(0, length) + '...';
    }
  }
}

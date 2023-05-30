import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstTwentyChars'
})
export class FirstTwentyCharsPipe implements PipeTransform {

  transform(value: string, limit: number = 20): string {
    if (value.length <= limit) {
      return value;
    } else {
      return value.substring(0, limit) + '...';
    }
  }
}

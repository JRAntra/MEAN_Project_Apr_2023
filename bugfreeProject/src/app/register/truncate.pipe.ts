import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(input: string): string {
    if (input.length <= 20) {
      return input;
    } else {
      return input.substring(0, 20) + '...';
    }
  }
}



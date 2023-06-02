import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversed',
})
export class ReversedPipe implements PipeTransform {
  transform<T>(value: T[]): T[] {
    const reversed = [...value];
    return reversed.reverse();
  }
}

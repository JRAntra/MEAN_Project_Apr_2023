import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number = 20): string {
    if (value.length <= length) {
      return value;
    } else {
      return value.substr(0, length) + '...';
    }
  }
}

// The custom pipe should take string as input, and output only the first 20 characters.
// If the input is more than 20 characters, display "..." at the end of the converted string
// import as: import { TruncatePipe } from '../../shared/truncate.pipe'
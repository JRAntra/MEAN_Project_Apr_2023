import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray',
  pure: false,
})
export class ToArrayPipe implements PipeTransform {
  transform<T>(value: { [key: string | number | symbol]: T }): T[] {
    if (!value) {
        return [];
      }

    return Object.keys(value).map(key => value[key]);
  }
}
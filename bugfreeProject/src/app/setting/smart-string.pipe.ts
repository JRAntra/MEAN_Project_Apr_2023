import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'smartString'
})
export class SmartStringPipe implements PipeTransform {
    transform(value: string, maxLen: number = 20): string {
        if (value.length <= maxLen) return value;
        return value.slice(0, maxLen) + '...';
    }

}

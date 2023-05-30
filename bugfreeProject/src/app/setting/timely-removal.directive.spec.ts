import { ElementRef } from '@angular/core';
import { TimelyRemovalDirective } from './timely-removal.directive';

describe('TimelyRemovalDirective', () => {
  it('should create an instance', () => {
    let mockEle = {
        nativeElement: document.createElement('div'),
    }
    const directive = new TimelyRemovalDirective(mockEle);
    expect(directive).toBeTruthy();
  });
});

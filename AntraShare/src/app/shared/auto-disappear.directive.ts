import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutoDisappear]',
})
export class AutoDisappearDirective {
  @Input() autoDisappearTime = 5000;
  constructor(private el: ElementRef) {
    setTimeout(() => {
      this.el.nativeElement.style.display = 'none';
    }, this.autoDisappearTime);
  }
}

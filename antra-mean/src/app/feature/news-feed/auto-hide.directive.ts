import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoHide]'
})
export class AutoHideDirective {

  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.elementRef.nativeElement.style.display = 'none';
    }, 5000);
  }
}

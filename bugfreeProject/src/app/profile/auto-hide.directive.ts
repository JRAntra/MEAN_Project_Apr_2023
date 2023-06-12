import { Directive } from '@angular/core';
import { ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoHide]'
})
export class AutoHideDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }, 5000);
  }
}



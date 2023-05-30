import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appTimelyRemoval]'
})
export class TimelyRemovalDirective implements OnInit {

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.elementRef.nativeElement.remove();
        }, 5000);
    }

}

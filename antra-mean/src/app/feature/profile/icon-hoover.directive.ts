import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
	selector: '[appIconHoover]'
})
export class IconHooverDirective {
	constructor() {}
	@HostBinding('class.icon-hover') isHovered = false
	@HostListener('mouseenter')
	onMouseEnter() {
		this.isHovered = true
	}
	@HostListener('mouseleave')
	onMouseLeave() {
		this.isHovered = false
	}
}

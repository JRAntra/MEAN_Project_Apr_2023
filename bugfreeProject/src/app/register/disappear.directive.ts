import { Directive, HostBinding, OnInit } from '@angular/core'

@Directive({
	selector: '[appDisappear]'
})
export class DisappearDirective implements OnInit {
	@HostBinding('style.display') display: string = 'block'
	ngOnInit() {
		setTimeout(() => {
			this.display = 'none'
		}, 5000)
	}
}
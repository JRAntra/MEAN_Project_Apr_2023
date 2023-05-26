import { Directive, HostBinding, OnInit } from '@angular/core'

/**
 * This directive is used to hide the element after 5 seconds
 * To use:
 *        Import the AutoHideDirective in the module and declare it in the declarations array
 *        add the directive to the element you want to hide after 5 seconds
 */
@Directive({
	selector: '[appElementAutoHide]'
})
export class AutoHideDirective implements OnInit {
	@HostBinding('style.display') display: string = 'block'

	ngOnInit() {
		setTimeout(() => {
			this.display = 'none'
		}, 5000)
	}
}

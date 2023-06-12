import { Injectable } from '@angular/core'
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router'
import { Observable } from 'rxjs'
import { AdminService } from 'src/app/feature/admin-page/admin.service'

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private adminService: AdminService, private router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		console.log('In auth guard')
		let val = this.adminService.isAuthorized()
		if (val) {
			return true
		} else {
			alert('Please login first')
			return false
		}
	}
}

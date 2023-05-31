import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {
	transform(value: any[], keyword: string) {
		if (!keyword) {
			return value
		} else {
			return value.filter((product) => {
				return product.title.toLowerCase().startsWith(keyword)
			})
		}
	}
}

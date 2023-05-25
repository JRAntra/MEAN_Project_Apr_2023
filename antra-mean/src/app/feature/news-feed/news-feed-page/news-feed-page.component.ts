import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
	selector: 'app-news-feed-page',
	templateUrl: './news-feed-page.component.html',
	styleUrls: ['./news-feed-page.component.sass']
})
export class NewsFeedPageComponent {
	inputValue?: string

	myFormGroup: FormGroup

	constructor() {
		this.myFormGroup = new FormGroup({
			photo: new FormControl()
		})
	}
}

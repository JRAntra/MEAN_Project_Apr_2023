import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Story } from 'src/app/shared/userInfo.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DatePipe } from '@angular/common'
import { NewsFeedService } from '../news-feed.service'
import { UserInfo } from 'src/app/shared/userInfo.model'
import { UserAccountService } from 'src/app/shared/userAccountService'
export interface Post {
	image: string
	video: string
	text: string
	publisherName: string
	publishedTime: string
	content: object
	comment: object
	likedIdList: any
}

@Component({
	selector: 'app-news-feed-page',
	templateUrl: './news-feed-page.component.html',
	styleUrls: ['./news-feed-page.component.sass']
})
export class NewsFeedPageComponent implements OnInit {
	postForm!: FormGroup
	inputValue?: string
	storyList$?: Observable<Story[]>
	likedList$?: Observable<Story[]>
	likedlistVisible = false
	localUserInfo: UserInfo | null = null
	constructor(
		private datePipe: DatePipe,
		private newsFeedService: NewsFeedService,
		private fb: FormBuilder,
		private userAccountService: UserAccountService
	) {}

	ngOnInit(): void {
		this.postForm = this.fb.group({
			content: ['', [Validators.required, Validators.maxLength(400)]]
		})

		this.storyList$ = this.newsFeedService.getNewsFeed()
		this.likedList$ = this.newsFeedService.getLikedList()
		this.localUserInfo = this.userAccountService.getLocalUserInfo()
		console.log(
			'news-feed-page.component.ts: ngOnInit(): this.localUserInfo: ',
			this.localUserInfo
		)
	}

	submitPostForm(): void {
		if (this.postForm.invalid) {
			return
		}

		const postData = this.postForm.value
		this.postForm.reset()
	}

	goToLikedList() {
		this.likedlistVisible = !this.likedlistVisible
	}
}

import { Component, OnInit, Input } from '@angular/core'
import { DatePipe } from '@angular/common'
import { Story } from 'src/app/shared/userInfo.model'
import { NewsFeedService } from '../news-feed.service'

@Component({
	selector: 'app-like-list',
	templateUrl: './like-list.component.html',
	styleUrls: ['./like-list.component.sass']
})
export class LikeListComponent implements OnInit {
	@Input() storyList!: Story[]
	like = false

	constructor(private newsFeedService: NewsFeedService) {}

	setLikeStory(story: Story) {
		this.newsFeedService.addToLikeList(story)
		this.like = true
	}

	removeLikeStory(story: Story) {
		this.newsFeedService.removeFromLikeList(story)
		this.like = false
	}

	isLiked(story: Story) {
		return this.newsFeedService.isLiked(story)
	}

	ngOnInit(): void {}
}

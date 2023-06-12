import { Injectable, OnInit, OnDestroy } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject, tap, of } from 'rxjs'
import { Story } from 'src/app/shared/userInfo.model'

@Injectable({
	providedIn: 'root'
})
export class NewsFeedService implements OnDestroy {
	private apiUrl = 'http://localhost:4231/api/news'

	private likedList$ = new BehaviorSubject<Story[]>([])
	private newsFeed$ = new BehaviorSubject<Story[]>([])

	constructor(private http: HttpClient) {
		const storedLikeList = localStorage.getItem('LikedList')
		if (storedLikeList) {
			this.likedList$.next(JSON.parse(storedLikeList))
		} else {
			this.likedList$.next([])
		}
	}

	ngOnDestroy(): void {
		this.likedList$.next([])
		localStorage.removeItem('LikedList')
	}

	getLikedList() {
		return this.likedList$.asObservable()
	}

	getNewsFeed(): Observable<Story[]> {
		if (this.newsFeed$.getValue().length === 0) {
			return this.http
				.get<Story[]>(this.apiUrl)
				.pipe(tap((data) => this.newsFeed$.next(data)))
		} else {
			return this.newsFeed$.asObservable()
		}
	}

	isLiked(story: Story) {
		const likedList = this.likedList$.getValue()
		return likedList.some((item) => item._id === story._id)
	}

	addToLikeList(story: Story) {
		const currentLikeList = this.likedList$.getValue()
		const updatedLikeList = [...currentLikeList, story]

		this.likedList$.next(updatedLikeList)
		this.updateLocalStorage(updatedLikeList)
	}

	removeFromLikeList(story: Story) {
		const currentLikeList = this.likedList$.getValue()
		const updatedLikeList = currentLikeList.filter(
			(item) => item._id !== story._id
		)
		this.likedList$.next(updatedLikeList)
		this.updateLocalStorage(updatedLikeList)
	}

	private updateLocalStorage(likedList: Story[]) {
		localStorage.setItem('likeList', JSON.stringify(likedList))
	}
}

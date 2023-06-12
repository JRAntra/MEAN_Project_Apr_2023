import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class NewsFeedService {
	private apiUrl = 'http://localhost:4231/api/news'

	constructor(private http: HttpClient) {}

	getNewsFeed(): Observable<any[]> {
		return this.http.get<any>(this.apiUrl)
	}
}

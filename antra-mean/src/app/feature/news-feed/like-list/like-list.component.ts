import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-like-list',
	templateUrl: './like-list.component.html',
	styleUrls: ['./like-list.component.sass']
})
export class LikeListComponent implements OnInit {
	likedNews: any[] = []
	constructor() {
		this.generateFakeData();
	}
	generateFakeData(): void {
    // Generate fake data for the likedNews array
    for (let i = 1; i <= 15; i++) {
      this.likedNews.push({
        userID: `User ${i}`,
        body: `This is the body of liked item ${i}`,
        comments: Math.floor(Math.random() * 100),
        likes: Math.floor(Math.random() * 100),
      });
    }
  }

	ngOnInit(): void {}
}

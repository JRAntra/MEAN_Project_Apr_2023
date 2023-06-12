export interface UserInfo {
	id?: string
	userEmail?: string
	userRole?: string
	userName?: string
	password?: string
	name?: string
	gender?: string
	age?: number
	phone?: string
	LikeList?: any[] // Update this line with the appropriate type for the LikeList array
	avatar?: string // Update this line with the appropriate type for the avatar property
	bearerToken?: string
}

export type Comment = {
	_id?: string
	publisherName?: string
	publishedTime?: string
	content?: Content
}

export type Content = {
	_id?: string
	text?: string
	image?: string
	video?: string
}
export type Story = {
	_id?: string
	publisherName?: string
	publishedTime?: string
	content?: Content
	comment?: Comment[]
	likedIdList?: string[]
	liked: boolean
}

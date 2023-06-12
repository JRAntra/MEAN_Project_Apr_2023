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

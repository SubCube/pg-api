import { CreatePostResponse } from 'generated/api'

export class Post implements CreatePostResponse {
	id: number
	title: string
	description: string
	image: string
	constructor() {
		this.title = ''
		this.description = ''
		this.image = ''
	}
}
// export class PostRequest implements CreatePostRequest {
// 	id: number
// 	title: string
// 	description: string
// 	image: string
// 	constructor() {
// 		this.title = ''
// 		this.description = ''
// 		this.image = ''
// 	}
// }

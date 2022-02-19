/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { CreatePostRequest } from './models/CreatePostRequest';
export type { CreatePostResponse } from './models/CreatePostResponse';

export { $CreatePostRequest } from './schemas/$CreatePostRequest';
export { $CreatePostResponse } from './schemas/$CreatePostResponse';

export { PostsService } from './services/PostsService';

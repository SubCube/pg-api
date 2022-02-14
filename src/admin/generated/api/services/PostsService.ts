/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePostRequest } from '../models/CreatePostRequest';
import type { CreatePostResponse } from '../models/CreatePostResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostsService {

    /**
     * List of posts
     * Get list of Posts
     * @returns any success
     * @throws ApiError
     */
    public static get(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts',
            errors: {
                400: `error`,
                500: `error 2`,
            },
        });
    }

    /**
     * Get current post by id
     * Get current post with id
     * @param id Id of the post
     * @returns CreatePostResponse success
     * @throws ApiError
     */
    public static get1(
        id: number = 1,
    ): CancelablePromise<CreatePostResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `error`,
                500: `error 2`,
            },
        });
    }

    /**
     * Delete post
     * Delete current post by id
     * @param id Id of the entity
     * @returns CreatePostResponse success
     * @throws ApiError
     */
    public static delete(
        id: number,
    ): CancelablePromise<CreatePostResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/post/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `error`,
                500: `error 2`,
            },
        });
    }

    /**
     * Create new post
     * @param requestBody
     * @returns CreatePostResponse success
     * @throws ApiError
     */
    public static post(
        requestBody: CreatePostRequest,
    ): CancelablePromise<CreatePostResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `error`,
            },
        });
    }

    /**
     * Update post
     * Update post by id
     * @param requestBody
     * @returns CreatePostResponse success
     * @throws ApiError
     */
    public static put(
        requestBody: CreatePostResponse,
    ): CancelablePromise<CreatePostResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/post',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `error`,
            },
        });
    }

}
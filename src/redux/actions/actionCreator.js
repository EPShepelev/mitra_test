import { GET_POSTS, SET_POSTS, GET_COMMENTS, SET_COMMENTS } from '../constants'

export const getPostsAction = () => ({
    type: GET_POSTS
})

export const setPostsAction = (payload) => ({
    type: SET_POSTS,
    payload
})

export const getCommentsAction = () => ({
    type: GET_COMMENTS,
})

export const setCommentsAction = (payload) => ({
    type: SET_COMMENTS,
    payload
})
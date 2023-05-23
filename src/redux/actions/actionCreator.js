import { GET_POSTS, SET_POSTS } from '../constants'

export const getPostsAction = () => ({
    type: GET_POSTS
})

export const setPostsAction = (payload) => ({
    type: SET_POSTS,
    payload
})
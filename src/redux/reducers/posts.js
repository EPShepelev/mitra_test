import { SET_POSTS } from '../constants'

const initialState = {
    posts: [],
    fetching: false, 
    error: null
}
const postsReducer = (state = initialState, { type, payload }) => {
   switch(type) {
    case SET_POSTS:
        return {
            ...state, posts:payload,
        }
    default: return state
   }
}

export default postsReducer
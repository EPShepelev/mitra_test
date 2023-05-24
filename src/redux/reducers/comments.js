import { SET_COMMENTS } from '../constants'

const initialState = {
    comments: [],
    fetching: false, 
    error: null
}
const commentsReducer = (state = initialState, { type, payload }) => {
   switch(type) {
    case SET_COMMENTS:
        return {
            ...state, comments: state.comments ? payload : [...state.comments, ...payload],
        }
    default: return state
   }
}

export default commentsReducer
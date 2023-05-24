import { combineReducers } from "redux";
import postsReducer from "./posts";
import commentsReducer from './comments'

const rootReducer = combineReducers({
    'posts': postsReducer,
    'comments': commentsReducer,
})

export default rootReducer
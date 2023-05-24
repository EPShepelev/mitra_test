import { combineReducers } from "redux";
import postsReducer from "./posts";
import commentsReducer from './comments'
import userReducer from './user'

const rootReducer = combineReducers({
    'posts': postsReducer,
    'comments': commentsReducer,
    'user': userReducer,
})

export default rootReducer
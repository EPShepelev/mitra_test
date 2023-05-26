import { combineReducers } from "redux";
import postsReducer from "./posts";
import commentsReducer from './comments'
import userReducer from './user'
import  errorsReducer from './errors'

const rootReducer = combineReducers({
    'posts': postsReducer,
    'comments': commentsReducer,
    'user': userReducer,
    'errors': errorsReducer,
})

export default rootReducer
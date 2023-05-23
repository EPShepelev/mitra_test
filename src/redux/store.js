import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index'
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

    const configureStore = initilState => createStore(
        rootReducer,
        initilState,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    )

    const store = configureStore({})

    sagaMiddleware.run(rootSaga)

    export default store
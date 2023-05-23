import { createStore, compose } from "redux";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

    const configureStore = initilState => createStore(
        reducer,
        initilState,
        composeEnhancers(),
    )

    const store = configureStore({})

    export default store
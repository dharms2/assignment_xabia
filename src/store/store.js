import { compose, createStore } from 'redux';
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
    compose(
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
        compose
    )
)

export default store;
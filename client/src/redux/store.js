import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers/root-reducer';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const middlewares = [thunk, logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

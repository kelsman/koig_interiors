import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const middlewares = [logger];

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)





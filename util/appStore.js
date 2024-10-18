import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import dataReducer from './dataSlice';
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import * as thunkMiddleware  from 'redux-thunk';

const rootReducer = combineReducers({ 
    data:dataReducer,
})

const persistConfig = {
    key: 'root',
    storage: storageSession,
    // storage,
    // whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware( {serializableCheck: false}),
},
applyMiddleware(thunkMiddleware)
)

export const persistor = persistStore(store)
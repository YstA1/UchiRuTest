import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitSlice from './toolkitSlice.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
	toolkit: toolkitSlice,
})

const persistConfig = {
	key: 'root',
	storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)  

export const store = configureStore({
	reducer: persistedReducer,
})

export const persistor = persistStore(store)
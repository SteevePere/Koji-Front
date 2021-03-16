import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { reducer } from './rootReducer';


const middleware = [...getDefaultMiddleware(), logger];


const store = configureStore({
	reducer,
	middleware,
});


export type RootState = ReturnType<typeof store.getState>

export default store;

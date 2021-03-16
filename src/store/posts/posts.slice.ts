import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { postsInitialState } from './posts.initialState';
import { postsReducer } from './posts.reducer';

import { RootState } from '../store';

import { apiGetPosts } from 'api/posts';


export const postsSlice = createSlice({
	name: 'posts',
	initialState: postsInitialState,
	reducers: postsReducer,
});


export const { setLoading, setMoreLoading, setSuccess, setFailure } = postsSlice.actions;


export const getPosts = (start: number, limit: number, showMore: boolean) => async (dispatch: Dispatch) =>
{
	try
	{
		if (showMore) dispatch(setLoading());
		else dispatch(setMoreLoading());

		const response = await apiGetPosts(start, limit);
		const result = await response.data;

		dispatch(setSuccess(result));
	}

	catch (error)
	{
		dispatch(setFailure(error.toString()));
	}
};


export const selectPosts = (state: RootState) => state.posts;


export default postsSlice.reducer;

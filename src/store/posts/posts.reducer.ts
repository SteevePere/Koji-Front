import { PayloadAction } from '@reduxjs/toolkit';
import { IPost, IPostState } from './types';


export const postsReducer =
{
	setLoading: (state: IPostState) =>
	{
		state.loading = true;
	},
	setMoreLoading: (state: IPostState) =>
	{
		state.moreLoading = true;
	},
	setSuccess: (state: IPostState, action: PayloadAction<IPost[]>) =>
	{
		state.loading = false;
		state.moreLoading = false;
		state.error = null;
		state.results = action.payload;
	},
	setFailure: (state: IPostState, action: PayloadAction<string>) =>
	{
		state.loading = false;
		state.moreLoading = false;
		state.error = action.payload;
		state.results = [];
	},
}

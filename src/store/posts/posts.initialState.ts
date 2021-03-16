import { IPostState } from './types';


export const postsInitialState: IPostState = {
	loading: false,
	moreLoading: false,
	error: null,
	results: [],
};

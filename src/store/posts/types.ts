export interface IPost
{
	userId: number;
	id: number;
	title: string;
	body: string;
}


export interface IPostState
{
	loading: boolean;
	moreLoading: boolean;
	error: string | null;
	results: IPost[];
}

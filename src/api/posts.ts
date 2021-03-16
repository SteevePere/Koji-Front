import axios from 'axios';

import { config } from 'config/config';


const POSTS_ENDPOINT = '/posts';


export const apiGetPosts = async (start: number, limit: number) =>
{
	return await axios.get(
		config.REACT_APP_POSTS_API_URL + POSTS_ENDPOINT,
		{
			params: {
				_start: start,
				_limit: limit,
			}
		}
	);
}

import React from 'react';
import { IPost } from 'store/posts/types';


interface IProps {
	post: IPost;
};


const PostCardBody = (props: IProps) =>
{

	const {
		post,
	} = props;


	return (

		<div style={{ textAlign: 'left' }}>
			{post.body}
		</div>
	);
}


export default PostCardBody;

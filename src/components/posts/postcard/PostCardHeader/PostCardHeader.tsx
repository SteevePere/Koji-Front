import React from 'react';
import { Divider, Space, Avatar, Card } from 'antd';

import { IPost } from 'store/posts/types';


const { Meta } = Card;


interface IProps
{
	post: IPost;
	backgroundPosition: string;
};


const PostCardHeader = (props: IProps) =>
{

	const {
		post,
		backgroundPosition,
	} = props;


	return (

		<div
			style={{
				backgroundImage: 'url(' + process.env.PUBLIC_URL + '/board.jpg)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: backgroundPosition,
				boxShadow: 'inset 0 0 0 200px rgba(255, 255, 255, 0.6)',
			}}
		>
			<h3>
				<Space
					style={{
						float: 'left',
						height: 70,
					}}
				>
					<Meta
						avatar={
							<Avatar
								src={process.env.PUBLIC_URL + '/user_logo.png'}
							/>
						}
						style={{ float: 'left' }}
					/>
					{post.title}
				</Space>
			</h3>
			<Divider/>
		</div>
	);
}


export default PostCardHeader;

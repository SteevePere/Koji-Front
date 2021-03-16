import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Tooltip } from 'antd';
import {
	EyeOutlined,
} from '@ant-design/icons';

import PostCardHeader from './PostCardHeader/PostCardHeader';
import PostCardBody from './PostCardBody/PostCardBody';

import { IPost } from 'store/posts/types';


interface Props {
	post: IPost;
};


const PostCard = (props: Props) =>
{

	const {
		post,
	} = props;


	const ViewButton = () =>
	{
		return (
			<Tooltip title='View Post' placement='bottom'>
				<NavLink
					to={'/posts/' + post.id}
				>
					<EyeOutlined
						key='view'
					/>
				</NavLink>
			</Tooltip>
		);
	}


	const getActions = () =>
	{
		let actions = [
			<ViewButton/>,
		];

		return actions;
	}


	return (

			<NavLink
				to={{
					pathname: '/posts/' + post.id,
					state: { post: post },
				}}
			>
				<Card
					hoverable
					style={{
						borderRadius: 10,
					}}
					actions={getActions()}
				>
					<PostCardHeader
						{...props}
						backgroundPosition='0 -70px'
					/>
					<PostCardBody
						{...props}
					/>
				</Card>
			</NavLink>
	);
}


export default PostCard;

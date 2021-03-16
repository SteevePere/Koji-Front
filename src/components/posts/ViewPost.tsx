import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, Space, Row, Col, Card, Divider } from 'antd';
import {
	UndoOutlined,
} from '@ant-design/icons';

import PostCardHeader from './postcard/PostCardHeader/PostCardHeader';
import { IPost } from 'store/posts/types';


interface IProps
{
	post: IPost;
};


interface ILocation
{
	state: {
		post: IPost;
	};
}


const ViewPost = (props: IProps) =>
{

	const location: ILocation = useLocation();

	const post: IPost = location.state.post;

	const backButton = (
		<Button
			type='primary'
		>
			<NavLink to={'/posts'}>
				<Space>
					<UndoOutlined/>
					Back
				</Space>
			</NavLink>
		</Button>
	);

	return (
		<>
			<Row
				style={{
					marginBottom: 30,
				}}
			>
				<Space>
					{backButton}
				</Space>
			</Row>
			<Row
				gutter={[36, 36]}
			>
				<Col span={24}>
					<Card>
						<PostCardHeader
							post={post}
							backgroundPosition='0 -320px'
						/>
						{post.body}
						<Divider/>
						<i>Posted by User {post.userId}</i>
					</Card>
				</Col>
			</Row>
		</>
	);
};


export default ViewPost;

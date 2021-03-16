import React, { useState, useEffect } from 'react';
import { Row, Col, Empty, Button } from 'antd';
import {
	PlusCircleOutlined,
} from '@ant-design/icons';

import { getPosts, selectPosts } from 'store/posts';
import { useSelector, useDispatch } from 'react-redux';

import { IPost } from 'store/posts/types';

import PostCard from './postcard/PostCard';
import Loader from 'components/lib/Loader/Loader';


const start = 0;
const postChunk = 9;


interface IProps {}


const PostList = (props: IProps) =>
{

	const state = useSelector(selectPosts);
	const dispatch = useDispatch();

	const [limit, setLimit] = useState(postChunk);


	useEffect(() =>
		{
			dispatch(getPosts(start, limit, true));
		},
		[dispatch] // eslint-disable-line react-hooks/exhaustive-deps
	);


	useEffect(() =>
		{
			if (limit > postChunk)
				dispatch(getPosts(start, limit, false));
		},
		[limit] // eslint-disable-line react-hooks/exhaustive-deps
	);


	return (
		<>
			{state.error ? (
				<p>{state.error}</p>
			) :
			state.loading ? (
				<Loader/>
			) :
			(
				<>
					<Row
						gutter={[36, 36]}
						style={{
							padding: '10px 30px 0 30px',
							minHeight: '90%',
							background: 'rgb(247, 247, 247)',
						}}
					>
						{state.results.map((post: IPost) =>
							<Col
								xl={8}
								lg={24}
								md={24}
								xs={24}
								key={'col_' + post.id}
							>
								<PostCard
									post={post}
								/>
							</Col>
						)}
						{!state.results.length &&
						<Empty
							description='No Posts were found'
							style={{
								margin: 'auto',
								marginTop: '25vh',
								marginBottom: '25vh',
							}}
						/>}
					</Row>
					<Row style={{ marginTop: 50, marginBottom: 50 }}>
						<Col span={12} offset={6}>
							<Button
								type='primary'
								block
								icon={<PlusCircleOutlined/>}
								loading={state.moreLoading}
								onClick={() => setLimit(limit + postChunk)}
							>
								View More Posts
							</Button>
						</Col>
					</Row>
				</>
			)}
		</>
	);
};


export default PostList;

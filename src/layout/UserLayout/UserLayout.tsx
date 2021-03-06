import React, { Component } from 'react';
import { Layout } from 'antd';
import {
	EditOutlined,
} from '@ant-design/icons';

import Logo from '../Logo/Logo';
import SideMenu from '../SideMenu/SideMenu';

import './UserLayout.css';

const { Header, Content, Footer, Sider } = Layout;


interface Props {
	content: Component;
};


interface MenuItem {
	key: string;
	icon: JSX.Element;
	name: string;
	to: string;
};


const UserLayout = (props: Props) =>
{

	const {
		content,
	} = props;


	const menuItems: MenuItem[] = [
		{
			key: 'posts',
			icon: <EditOutlined/>,
			name: 'Posts',
			to: '/posts',
		},
	];


	return (

		<Layout
			style={{ height: '100vh' }}
		>
			<Sider
				theme='light'
				breakpoint='lg'
				collapsedWidth='0'
				onBreakpoint={broken => {}}
				onCollapse={(collapsed, type) => {}}
			>
				<Logo/>
				<SideMenu
					{...props}
					menuItems={menuItems}
					theme='light'
				/>
			</Sider>
			<Layout
				style={{
					background: '#f7f7f7',
				}}
			>
				<Header
					className='site-layout-sub-header-background'
					style={{
						padding: 0,
						textAlign: 'right'
					}}
				>
				</Header>
				<Content
					style={{
						margin: '24px 16px 0',
						textAlign: 'center',
					}}
				>
					{content}
				</Content>
				<Footer
					style={{ textAlign: 'center' }}
				>
					<small>
						©Koji 2021
					</small>
				</Footer>
			</Layout>
		</Layout>
	);
}


export default UserLayout;

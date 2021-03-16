import React from 'react';
import { Spin } from 'antd';

import './Loader.css';


const Loader = () =>
{
	return (
		<div className='loader-middle'>
			<Spin/>
		</div>
	);
};


export default Loader;

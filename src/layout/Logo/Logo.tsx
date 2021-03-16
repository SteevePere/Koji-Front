import React from 'react';


const Logo = () =>
{
	console.log(window.location.origin);

	return (

		<img
			src={process.env.PUBLIC_URL + '/koji.png'}
			alt='Logo'
			style={{
				width: '100%',
				objectFit: 'cover',
				padding: 20,
			}}
		/>
	);
}


export default Logo;

import React from 'react';
import NFTs from 'components/NFTs';
import Welcome from 'components/Welcome';
import useAuth from 'hooks/useAuth';

const Protected = () => {
	const auth = useAuth();
	return auth ? <NFTs /> : <Welcome />;
};

export default Protected;

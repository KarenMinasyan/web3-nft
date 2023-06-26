import React from 'react';
import { useAppSelector } from 'hooks';
import { accountSelector } from 'helpers/reduxSelectors';

const useAuth = () => {
	const { token } = useAppSelector(accountSelector);
	return !!token;
};

export default useAuth;

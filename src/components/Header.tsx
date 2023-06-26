import { FC } from 'react';
import useAuth from 'hooks/useAuth';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

import Account from './Account';
import Connect from './Connect';

const Header: FC = () => {
	const token = useAuth();
	return (
		<div className='py-4 px-[25px] flex items-center justify-between border-b border-b-secondary-300'>
			<div className='flex items-center'>
				<Logo />
				<p className='font-extrabold text-xl ml-3'>NFTer</p>
			</div>
			{!token && <Connect />}
			{token && <Account />}
		</div>
	);
};

export default Header;

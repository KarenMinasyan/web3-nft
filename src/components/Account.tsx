import { FC, useEffect, useState } from 'react';
import Web3 from 'web3';
import { useAppDispatch, useAppSelector } from 'hooks';
import { disconnect, setAccount, setAccountImage } from 'store/account/accountSlice';
import { accountSelector } from 'helpers/reduxSelectors';
import { accountAvatarSetter } from 'utils/accountAvatarSetter';
import { connect } from 'utils/connect';
import Arrow from 'assets/icons/arrow.svg';
import { ReactComponent as ExitIcon } from 'assets/icons/exit.svg';
import { ReactComponent as ExploreIcon } from 'assets/icons/explore.svg';

const Account: FC = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const { address, avatar, token } = useAppSelector(accountSelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (token) {
			handleReconnect();
		}
	}, [token]);

	const handleReconnect = async () => {
		const web3 = new Web3(window.ethereum);
		const accounts = await connect(address, web3);
		if (accounts) {
			const accountImageURL = accountAvatarSetter(accounts, web3);
			dispatch(setAccount(accounts[0]));
			dispatch(setAccountImage(accountImageURL));
		}
	};

	const handleToggle = () => {
		setToggle((prev) => !prev);
	};

	const handleFormatAddress = (address: string) => {
		return address ? `${address.slice(0, 5)}...${address.slice(6, 11)}` : null;
	};

	const logout = () => {
		handleToggle();
		dispatch(disconnect());
		localStorage.removeItem('token');
	};

	return (
		<div className='flex items-center justify-between w-[178px] h-10 border-solid border border-secondary-300 rounded-lg px-3 relative active:border-2 active:border-primary-400 active:bg-primary-50 sm:border-0'>
			<div className='flex items-center mr-2' onClick={handleToggle}>
				<img className='mr-2 h-5 w-5 cursor-pointer rounded-xl' src={avatar} alt='avatar' />
				<span className='text-sm leading-[22px] font-semibold text-secondary-700 cursor-pointer'>
					{handleFormatAddress(address)}
				</span>
			</div>
			<div className='flex items-center border-l  border-secondary-300 h-3'>
				<img
					className='ml-3 h-3 w-3 cursor-pointer'
					src={Arrow}
					alt='avatar'
					onClick={handleToggle}
				/>
			</div>
			{toggle && (
				<div className='absolute top-[48px] right-0  w-[230px] bg-white rounded-xl shadow-xl pt-4 pb-4 xs:w-[320px] xs:rounded-none xs:top-[55px] xs:right-[-31px] xs:h-[124px]'>
					<div
						onClick={handleToggle}
						className='group flex items-center h-[48px] w-full pl-6 hover:bg-secondary-200'
					>
						<ExploreIcon className='w-3.5 h-3.5 text-secondary-700 group-hover:text-secondary-900' />
						<p className='ml-3 text-base leading-6 font-semibold text-secondary-700 cursor-pointer group-hover:text-secondary-900'>
							View on Explorer
						</p>
					</div>
					<div
						onClick={logout}
						className='group flex items-center h-[48px] w-full  pl-6 hover:bg-secondary-200 '
					>
						<ExitIcon className='w-3.5 h-3.5 text-secondary-700 group-hover:text-secondary-900' />
						<p className='ml-3 text-base leading-6 font-semibold text-secondary-700 cursor-pointer group-hover:text-secondary-900'>
							Disconnect Wallet
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Account;

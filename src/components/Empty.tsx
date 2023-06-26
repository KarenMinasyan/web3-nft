import { FC } from 'react';
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg';

const Empty: FC = () => (
	<div className='mt-6 mx-auto w-fit'>
		<div className='w-10 h-10 flex items-center justify-center bg-secondary-300 rounded-[10px] mb-2.5 mx-auto'>
			<SmileIcon />
		</div>
		<p className='text-700 font-bold text-secondary-700'>
			Unfortunately your wallet does not own any NFTs.
		</p>
	</div>
);

export default Empty;

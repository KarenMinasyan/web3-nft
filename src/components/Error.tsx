import { FC } from 'react';
import { ReactComponent as ErrorIcon } from 'assets/icons/close.svg';

type ErrorType = {
	message: string;
};

const Error: FC<ErrorType> = ({ message }) => (
	<div className='max-w-[328px] w-full rounded-xl bg-red-50 py-3 px-6 mt-6'>
		<div className='flex items-center font-bold text-red-600 mb-2'>
			<ErrorIcon className='w-6 h-6' />
			<p className='ml-2.5 font-bold'>Error</p>
		</div>
		<p className='text-secondary-700 font-semibold leading-[22px] text-sm'>{message}</p>
	</div>
);

export default Error;

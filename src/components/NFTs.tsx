import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchNFTs } from 'store/account/thunk';
import { accountSelector } from 'helpers/reduxSelectors';
import { NftType } from 'types';

import Card from './Card';
import Empty from './Empty';
import Loading from './Loading';

const NFTs: FC = () => {
	const { nfts, loading } = useAppSelector(accountSelector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchNFTs());
	}, []);

	if (loading) {
		return <Loading description='Loading' />;
	}

	return (
		<div>
			{!nfts.length && <Empty />}
			{!!nfts.length && (
				<div className='flex items-stretch sm:justify-center flex-wrap max-w-[1200px] xl:max-w-[957px] md:max-w-[702px] sm:max-w-[592px] xs:max-w-[272px] w-full mx-auto gap-y-3 my-8'>
					{nfts.map((item: NftType) => (
						<Card key={item.token_hash} item={item} />
					))}
				</div>
			)}
		</div>
	);
};

export default NFTs;

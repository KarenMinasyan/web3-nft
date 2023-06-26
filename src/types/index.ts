export type VerifyType = {
	message: string;
	signature: string;
	address: string;
};

export type NftType = {
	block_number: string;
	name: string;
	symbol: string | null;
	media?: { media_collection: { high: { url: string }; low: { url: string } } };
	token_hash: string;
};

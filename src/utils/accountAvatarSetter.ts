import Web3 from 'web3';

export const accountAvatarSetter = (accounts: string[], web3: Web3) =>
	`https://www.gravatar.com/avatar/${web3.utils.sha3(accounts[0])}?d=identicon`;

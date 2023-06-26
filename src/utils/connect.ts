import Web3 from 'web3';

export const connect = async (address: any, web3: Web3) => {
	let accounts: string[] | undefined;
	accounts = await web3.eth.getAccounts();
	if (!accounts?.length) {
		accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		if (accounts) {
			return accounts;
		}
	} else if (accounts[0] !== address) {
		return accounts;
	}
};

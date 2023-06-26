import AxiosInstance from 'utils/Instance';

const URL = '/nfts';

export const getNFTs = () => AxiosInstance.get(URL);

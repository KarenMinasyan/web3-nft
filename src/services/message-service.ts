import AxiosInstance from 'utils/Instance';

const messageUrl = '/message';

export const getMessage = () => AxiosInstance.get(messageUrl);

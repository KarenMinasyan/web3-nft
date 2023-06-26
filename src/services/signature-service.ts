import AxiosInstance from 'utils/Instance';
import { VerifyType } from 'types';

const URL = '/verify';

export const verifySignature = (body: VerifyType) => AxiosInstance.post(URL, body);

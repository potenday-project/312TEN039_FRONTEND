import { AxiosResponse } from 'axios';
import { URLS } from 'src/constants';
import axios from 'src/http-client/axios';

import { IAuthStore } from './store';

export const kakaoLogin = async (code: string): Promise<AxiosResponse<IAuthStore> | undefined> => {
  try {
    const response = await axios.post(URLS.OAUTH_KAKAO, {
      authorizationCode: code,
    });
    console.log('kakaoLogin', response);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return;
  }
};

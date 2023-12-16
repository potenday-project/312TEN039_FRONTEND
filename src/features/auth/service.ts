import { AxiosResponse } from 'axios';
import { URLS } from 'src/constants';
import axios from 'src/http-client/axios';

import { IAuthStore } from './store';
// import { HttpClientImplement } from 'src/http-client/fetch';

// export class AuthServiceImplement {
//   private httpClient;

//   constructor(httpClient: HttpClientImplement) {
//     this.httpClient = httpClient;
//   }
//   async get(code: string): Promise<IAuthStore> {
//     const response = await this.httpClient.fetch(URLS.OAUTH_KAKAO, {
//       method: 'POST',
//       body: JSON.stringify({
//         authorizationCode: code,
//       }),
//     });
//     return response.json();
//   }

//   async set(user: string, message: string) {
//     const response = await this.httpClient.fetch(`/chat/`, {
//       method: 'POST',
//       body: JSON.stringify({
//         user,
//         message,
//       }),
//     });
//     return response.json();
//   }
// }

// export const kakaoLogin = async (code: string) => {
//   try {
//     const response = await fetch(`${URLS.SERVER_URL}${URLS.OAUTH_KAKAO}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'access-control-allow-origin': '*',
//         credentials: 'include',
//         //   Authorization: 'Bearer ' + this.storage.get(),
//       },
//       body: JSON.stringify({
//         authorizationCode: code,
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//     return data;
//     return response.json();
//   } catch (error) {
//     console.error(error);
//   }
// };

export const kakaoLogin = async (code: string): Promise<AxiosResponse<IAuthStore> | undefined> => {
  try {
    const response = await axios.post(URLS.OAUTH_KAKAO, {
      authorizationCode: code,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return;
  }
};

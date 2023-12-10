import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './App';
import { URLS } from './constants';
import { ChatServiceImplement } from './features/chat/service';
import { HttpClientImplement } from './http-client/fetch';
import GoogleTagManager from './libs/analytics/GoogleTagManager';
import { LocalStorage } from './storage';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const storage = new LocalStorage();
const httpClient = new HttpClientImplement(URLS.BASE_URL, storage);
// const socketClient = new SocketClient();

export const chatService = new ChatServiceImplement(httpClient);

root.render(
  <RecoilRoot>
    <GoogleTagManager />
    <App />
  </RecoilRoot>
);

import { ROUTES } from '.';

const { VITE_APP_BASE_URL, VITE_KAKAO_REST_API_KEY, VITE_SERVER_URL } = import.meta.env;

export const URLS = {
  BASE_URL: VITE_APP_BASE_URL,
  SERVER_URL: VITE_SERVER_URL,
  KAKAO_CALLBACK_URL: `${VITE_APP_BASE_URL}${ROUTES.CALLBACK_KAKAO}`,
  OAUTH_KAKAO: '/oauth/authorize',
  CHAT: '/chat',
  CHAT_LIST: '/chat/list',
  CHAT_RECENT: '/chat/message',
} as const;

export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_REST_API_KEY}&redirect_uri=${URLS.KAKAO_CALLBACK_URL}&response_type=code`;

const { VITE_APP_BASE_URL } = import.meta.env;

export const URLS = {
  BASE_URL: VITE_APP_BASE_URL,
} as const;

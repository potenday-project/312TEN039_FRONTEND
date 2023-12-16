import { atom } from 'recoil';

import { IMessage } from './types';

interface IChatStore {
  messages: IMessage[];
  loading: boolean;
  nextCursor: number;
  totalElements: number;
}

export const chatStore = atom<IChatStore>({
  key: 'chatStore',
  default: {
    messages: [],
    loading: false,
    nextCursor: 0,
    totalElements: 0,
  },
});

import { atom } from 'recoil';

import { IRMessage } from './types';

interface IRollingPaperStore {
  messages: IRMessage[];
  loading: boolean;
  hasNext: boolean;
}

export interface IWriteAMessage {
  data: {
    randomName: string;
    rollingPaperId: number;
  };
  msg: string;
}

export const rollingPaperStore = atom<IRollingPaperStore>({
  key: 'rollingPaperStore',
  default: {
    messages: [],
    loading: false,
    hasNext: false,
  },
});

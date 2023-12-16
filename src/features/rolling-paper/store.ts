import { atom } from 'recoil';

import { IRMessage } from './types';

interface IRollingPaperStore {
  messages: IRMessage[];
  loading: boolean;
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
    messages: [
      {
        message: '푸바오 사랑해~',
        sender: 'otherUser1',
        nickName: '익명',
        date: 'Tue Dec 12 2023 14:50:15 GMT+0900',
      },
      {
        message: '용인푸씨 한국에서 살게 해주세요 기도 1일차...',
        sender: 'otherUser1',
        nickName: '익명',
        date: 'Tue Dec 12 2023 14:50:15 GMT+0900',
      },
      {
        message: '이건 푸바오 말도 들어봐야 된다',
        sender: 'otherUser2',
        nickName: '익명',
        date: 'Tue Dec 12 2023 14:50:15 GMT+0900',
      },
      {
        message: '푸바오 사랑해 영원한 내 아기 판다 사랑해 푸바오',
        sender: 'otherUser3',
        nickName: '익명',
        date: 'Tue Dec 12 2023 14:50:15 GMT+0900',
      },
      {
        message: '이건 푸바오 말도 들어봐야 된다',
        sender: 'otherUser4',
        nickName: '익명',
        date: 'Tue Dec 12 2023 14:50:15 GMT+0900',
      },
      {
        message: '푸야 건강만 해라',
        sender: 'otherUser5',
        nickName: '익명',
        date: 'Tue Dec 12 2023 14:50:15 GMT+0900',
      },
      {
        message: '알겠다 바오',
        sender: 'user',
        nickName: '익명',
        date: 'Tue Dec 12 2023 14:50:15 GMT+0900',
      },
    ],
    loading: false,
  },
});

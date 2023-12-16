import axios from 'axios';
import { URLS } from 'src/constants/apis';

import { IMessage } from './types';

interface IResponsePostMessage {
  savedUserChatId: number;
  savedAssiChatId: number[];
  messageResponse: string[];
  assiChatTime: string[];
  userChatTime: string;
}
export const postMessage = async (memberId: number, message: string): Promise<IResponsePostMessage | undefined> => {
  try {
    const response = await axios.post(`${URLS.CHAT}/${memberId}`, {
      message,
    });
    if (response) {
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
};

interface IResponseGetMessageList {
  contents: IMessage[];
  nextCursor: number;
  totalElements: number;
}
export const getMessageList = async (
  memberId: number,
  lastChatId: number,
  size = 10
): Promise<IResponseGetMessageList | undefined> => {
  try {
    const response = await axios.get(`${URLS.CHAT_LIST}/${memberId}`, {
      params: {
        lastChatId,
        size,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRecentMessage = async (memberId: number) => {
  try {
    const response = await axios.get(`${URLS.CHAT_RECENT}/${memberId}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

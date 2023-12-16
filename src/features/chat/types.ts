// export interface IMessage {
//   sender: string;
//   message: string;
//   date: string;
// }

export interface IMessage {
  role: string;
  message: string;
  chatTime: string;
  lastChatId: number;
}

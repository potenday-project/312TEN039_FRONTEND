import { styled } from 'styled-components';

import BaoMessage from './BaoMessage';
import UserMessage from './UserMessage';

const Messages = () => {
  const messages = [
    { message: 'hi', sender: 'bao' },
    {
      message: '푸둥아 안에서 뭐하고 있어? 언제 나와? 나 너 보려고 오픈런했다ㅜㅜㅋㅋ 밖에 엄청 따뜻해!',
      sender: 'user',
    },
    { message: '러바오는 벌써 나옴!', sender: 'user' },
    { message: '오늘 늦잠잤바오ㅜ', sender: 'bao' },
    { message: '오늘 좀 있다 나갈거바오', sender: 'bao' },
  ];
  return (
    <Layout>
      {messages.map(message => {
        if (message.sender === 'bao') {
          return <BaoMessage message={message.message} />;
        }
        return <UserMessage message={message.message} />;
      })}
    </Layout>
  );
};

export default Messages;

const Layout = styled.div`
  width: 100%;
  gap: 0.8rem;
  /* margin: 1rem 0; */
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

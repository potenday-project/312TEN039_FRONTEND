import { useNavigate } from 'react-router';
import { COLORS, ROUTES } from 'src/constants';
import styled from 'styled-components';

const ChatBox = () => {
  const navigate = useNavigate();

  const moveChat = () => {
    navigate(ROUTES.CHAT);
  };
  return (
    <ChatBoxLayout onClick={moveChat}>
      <div>푸바오</div>
      <div>워토우 더 먹고싶다바오</div>
      <MessageBox>
        <span>최근 메시지</span>
        <MessageState>
          <span>읽음 10:43</span>
          <MessageLayout>알겠다바오</MessageLayout>
        </MessageState>
      </MessageBox>
    </ChatBoxLayout>
  );
};

export default ChatBox;

const ChatBoxLayout = styled.div`
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const MessageBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 61px;
  background-color: ${COLORS.GRAY_200};
  padding: 12px 12.5px;
  border-radius: 10px;
  width: 313px;
  margin-bottom: 15px;
`;

const MessageState = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: end;
  gap: 0.4rem;
`;

const MessageLayout = styled.div`
  padding: 1rem 1.3rem;
  max-width: 16em;
  background-color: ${COLORS.GRAY_500};
  color: ${COLORS.WHITE};
  border-radius: 18px 0px 18px 18px;
  word-wrap: break-word;
`;

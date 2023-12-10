import { Messages } from 'src/features/chat';
import { styled } from 'styled-components';

function ChatPage() {
  return (
    <div>
      <PageHeader>
        <BackButton>뒤</BackButton>
        <Title>가운데</Title>
      </PageHeader>
      <PageBody>
        <Messages />
      </PageBody>
    </div>
  );
}

export default ChatPage;

const PageHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.2rem;
  width: 100%;
  height: 44px;
`;

const BackButton = styled.div`
  position: absolute;
  left: 1.2rem;
  top: 0.6rem;
  width: 24px;
  height: 24px;
`;

const Title = styled.div``;

const PageBody = styled.div`
  padding: 0 1.2rem;
`;

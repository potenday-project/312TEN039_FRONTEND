import { COLORS } from 'src/constants';
import { styled } from 'styled-components';

const UserMessage = ({ message }: { message: string }) => {
  return (
    <Layout>
      <div>10:11</div>
      <MessageLayout>{message}</MessageLayout>
    </Layout>
  );
};

export default UserMessage;

const Layout = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: end;
  gap: 0.4rem;
`;

const MessageLayout = styled.div`
  padding: 1rem 1.3rem;
  max-width: 20rem;
  background-color: ${COLORS.GRAY_500};
  color: ${COLORS.WHITE};
  border-radius: 18px 0px 18px 18px;
  word-wrap: break-word;
`;

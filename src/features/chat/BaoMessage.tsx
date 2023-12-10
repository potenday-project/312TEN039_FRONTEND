import { COLORS } from 'src/constants';
import { styled } from 'styled-components';

const BaoMessage = ({ message }: { message: string }) => {
  return (
    <Layout>
      <MessageLayout>{message}</MessageLayout>
      <div>10:11</div>
    </Layout>
  );
};

export default BaoMessage;

const Layout = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: end;
  gap: 0.4rem;
`;

const MessageLayout = styled.div`
  padding: 1rem 1.3rem;
  max-width: 20rem;
  background-color: ${COLORS.GRAY_100};
  color: ${COLORS.GRAY_900};
  border-radius: 0px 18px 18px 18px;
  word-wrap: break-word;
`;

import { COLORS } from 'src/constants';
import styled from 'styled-components';

import { Header, ChatBox, Merch, RollingPaperBox, Calender } from '../features/main';

function MainPage() {
  return (
    <MainLayout>
      <PageHeader>
        <Header />
      </PageHeader>
      <PageBody>
        <ChatBox />
        <SubLayout>
          <RollingPaperBox />
          <Calender />
        </SubLayout>
        <Merch />
      </PageBody>
    </MainLayout>
  );
}

export default MainPage;

const MainLayout = styled.div`
  height: 100vh;
  padding: 0px 16px;
  background-color: ${COLORS.PRIMARY_50};
`;

const PageHeader = styled.div``;

const PageBody = styled.div``;

const SubLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 17px;
`;

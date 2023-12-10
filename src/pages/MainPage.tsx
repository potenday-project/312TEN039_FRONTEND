import styled from 'styled-components';

import { Header, ChatBox, Merch, Sub } from '../features/main';

function MainPage() {
  return (
    <MainLayout>
      <PageHeader>
        <Header />
      </PageHeader>
      <PageBody>
        <ChatBox />
        <SubLayout>
          <Sub title="언제나 널 생각해" note="푸바오를 생각하는 마음을 남겨주세요!" />
          <Sub title="푸바오 생일" note="푸바오의 생일을 축하해 주세요????" />
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
`;

const PageHeader = styled.div``;

const PageBody = styled.div``;

const SubLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

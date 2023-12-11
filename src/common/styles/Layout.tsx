import React from 'react';

import { Outlet } from 'react-router-dom';
import { COLORS } from 'src/constants';
import { styled } from 'styled-components';

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <PageLayout>
      <Outlet />
      {children}
    </PageLayout>
  );
};

export default Layout;

const PageLayout = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 428px;
  height: 100%;
  min-height: 100vh;
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 0px 16px rgb(50 50 50 / 12%);
  overflow: hidden;
  > * {
    width: 100%;
    height: calc(${window.innerHeight}px);
    display: flex;
    flex-direction: column;
  }
`;

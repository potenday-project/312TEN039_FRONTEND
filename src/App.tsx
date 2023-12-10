import { Suspense } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './common/styles';
import Layout from './common/styles/Layout';
import { ROUTES } from './constants';
import RouteChangeTracker from './libs/analytics/RouteChangeTracker';
import ChatPage from './pages/ChatPage';
import MainPage from './pages/MainPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.MAIN,
      element: (
        <Layout>
          <RouteChangeTracker />
        </Layout>
      ),
      children: [
        {
          path: ROUTES.MAIN,
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <MainPage />
            </Suspense>
          ),
        },
        {
          path: ROUTES.CHAT,
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <ChatPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

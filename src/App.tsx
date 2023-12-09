import { Suspense } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './common/styles';
import { ROUTES } from './constants';
import ChatPage from './pages/ChatPage';
import MainPage from './pages/MainPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.MAIN,
      // element: <Layout />,
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

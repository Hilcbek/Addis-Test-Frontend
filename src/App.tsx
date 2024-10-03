import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainOutlet from './components/MainOutlet';
import { Home } from './pages/Home';
import { Toaster } from 'react-hot-toast';
import UpdateMusic from './pages/UpdateMuisc.tsx';
import { LoaderComponent, ParentComponent } from './styles/AppStyles.ts';
const CreateMusic = React.lazy(() => import('./pages/createMusic.tsx'));
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoaderComponent>Loading...</LoaderComponent>}>
        <MainOutlet />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoaderComponent>Loading...</LoaderComponent>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'createMusic',
        element: (
          <Suspense fallback={<LoaderComponent>Loading...</LoaderComponent>}>
            <CreateMusic />
          </Suspense>
        ),
      },
      {
        path: '/updateMusic',
        element: (
          <Suspense fallback={<LoaderComponent>Loading...</LoaderComponent>}>
            <UpdateMusic />
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <ParentComponent>
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <RouterProvider router={router} />
    </ParentComponent>
  );
}

export default App;

import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainOutlet from './components/MainOutlet';
import { Home } from './pages/Home';
import { Toaster } from 'react-hot-toast';
import UpdateMusic from './pages/UpdateMuisc.tsx';
const CreateMusic = React.lazy(() => import('./pages/createMusic.tsx'));
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainOutlet />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'createMusic',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CreateMusic />
          </Suspense>
        ),
      },
      {
        path: '/updateMusic',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UpdateMusic />
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <div className="w-full h-full font-SpaceMono px-10 sm:px-16 md:px-20 lg:px-28 xl:px-32">
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

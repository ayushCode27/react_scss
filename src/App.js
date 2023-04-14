import './App.scss';
import Header from './components/Header';
import Section from './components/Section';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Data } from './Data';
import Second from './Second';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: '/',
        element: (
          <>
            <Section slides={Data} />
            <Second />
          </>
        ),
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

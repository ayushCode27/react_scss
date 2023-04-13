import './App.scss';
import Header from './components/Header';
import Section from './components/Section';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Data } from './Data';
import Second from './Second';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Header />
        <Section slides={Data} />
        <Second/>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

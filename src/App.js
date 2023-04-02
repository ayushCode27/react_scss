import './App.scss';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{ path: '/', element: <Header></Header> }]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

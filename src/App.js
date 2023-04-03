import './App.scss';
import Header from './components/Header';
import Section from './components/Section';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Data } from './Data';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <>
        
//       </>
//     ),
//   },
// ]);

function App() {
  return (
    <div>
      <Header />
      <Section slides={Data} />
    </div>
  );
}

export default App;

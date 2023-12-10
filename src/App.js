import './App.css';
import Homepage from './pages/Homepage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TryNow from './pages/TryNow';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/try-now',
    element: <TryNow />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

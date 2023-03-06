import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import CreateGame from './pages/create-game/CreateGame';
import ChoiceOfAcion from './pages/choice-of-action/ChoiceOfAcion';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/choiceOfAction",
        element: <ChoiceOfAcion></ChoiceOfAcion>
        
      },
      {
        path: "/createGame",
        element: <CreateGame></CreateGame>
      }
    ]
  },
  {
    path: "/createGame",
    element: <CreateGame></CreateGame>
  }
]);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
  
);

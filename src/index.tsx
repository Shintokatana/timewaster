import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import { app } from './firebase';

import './index.css';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hello",
    element: <App />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContextProvider from './Features/ContextProvider.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import OrdersPage from './Pages/OrdersPage/OrdersPage.jsx';
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage.jsx';
import Layout from './Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "orders",
        element: <OrdersPage />
      },
      {
        path: "checkout",
        element: <CheckOutPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);

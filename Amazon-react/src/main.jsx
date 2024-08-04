import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContextProvider from './Features/ContextProvider.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import OrdersPage from './Pages/OrdersPage/OrdersPage.jsx';
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage.jsx';
import Layout from './Layout.jsx'; // Ensure this file exists and is correctly named
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps around the child routes
    children: [
      {
        path: "",
        element: <HomePage /> // Home page at root
      },
      {
        path: "orders",
        element: <OrdersPage /> // Orders page route
      },
      {
        path: "checkout",
        element: <CheckOutPage /> // Checkout page route
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);

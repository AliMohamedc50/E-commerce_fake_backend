/* eslint-disable no-unused-vars */

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";

import React from 'react'
import Footer from "./components/footer/Footer";
import  {Navbar} from "./components/navbar/Navbar";
import "./App.css"
import DrawerAppBar from "./components/navbar/Navbar";
function Layout() {
  return (
    <div>
      <DrawerAppBar />
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  }
]);


function App() {


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App

/* eslint-disable no-unused-vars */

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";

import React from "react";
import Footer from "./components/footer/Footer";
import "./App.css";
import DrawerAppBar from "./components/navbar/Navbar";
import SearchAppBar from "./components/navbar2/NaveBar2";
import Login from "./pages/login/Login";
import Regestration from "./pages/registration/Regestration";
import UserProfile from "./pages/userProfile/UserProfile";

function Layout() {
  return (
    <div>
      <DrawerAppBar />
      {/* <SearchAppBar /> */}
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
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "regestration",
    element: <Regestration />,
  },
  {
    path: "profile",
    element: <UserProfile />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

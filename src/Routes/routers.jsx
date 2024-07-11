import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Services/Services/Services";
import ProductDetails from "../pages/Services/ProductDetails/ProductDetails";
import CategoryPage from "../pages/Services/CategoryPage/CategoryPage";
import PrivateRroute from "./PrivateRroute";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import Dashboard from "../Layout/Dashboard";
import AddProduct from "../pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProduct from "../pages/Dashboard/Seller/MyProduct/MyProduct";
import Blogs from "../pages/Blogs/Blogs";
import AllSellers from "../pages/Dashboard/Admin/AllSellers/AllSellers";
import AllBuyers from "../pages/Dashboard/Admin/AllBuyers/AllBuyers";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import MyOrder from "../pages/Dashboard/buyer/MyOrder/MyOrder";
import PaymentPage from "../pages/Dashboard/buyer/PaymentPage/PaymentPage";
import ErrorPage from "../Layout/ErrorPage";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      // {
      //   path: "category",
      //   element: <Services></Services>,
      // },
      {
        path: "category/:id",
        element: (
          <PrivateRroute>
            <CategoryPage></CategoryPage>
          </PrivateRroute>
        ),
      },
      {
        path: "productDetails",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRroute>
        <Dashboard></Dashboard>
      </PrivateRroute>
    ),
    children: [
      {
        path: "add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "my-products",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "all-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "all-sellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "all-buyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "my-orders",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "payment/:id",
        element: <PaymentPage></PaymentPage>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default routers;

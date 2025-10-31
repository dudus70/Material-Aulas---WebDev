import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import Layout from "../Layout";
import SearchResults from "../pages/SearchResults";
import SearchPageWelcome from "../pages/SearchPageWelcome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "cart", element: <Cart /> },
      { path: "searchWelcome", element: <SearchPageWelcome /> },
      { path: "searchWelcome/:termoBusca", element: <SearchResults /> },
      { path: "product/:id", element: <ProductDetails /> },
    ],
  },
]);

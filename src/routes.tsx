import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import { Children } from "react";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "game/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import { protectedLoader, roleLoader } from "../loaders/protectedLoader";
import { publicLoader } from "../loaders/publicLoader";
import AdminPage from "../pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    loader: protectedLoader
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: publicLoader
  },
  {
    path: "/admin",
    element: <AdminPage />,
    loader: roleLoader(["ADMIN", "STAFF"])
  }
]);

export default router;

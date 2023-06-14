import Recipes from "./Recipes/Recipes";
import RecipeForm from "./RecipeForm/RecipeForm";
import "./App.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./Menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => (
      <Menu>
        <Outlet />
      </Menu>
    ),
    children: [
      {
        index: true,
        Component: Recipes,
      },
      {
        path: "new",
        Component: RecipeForm,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;

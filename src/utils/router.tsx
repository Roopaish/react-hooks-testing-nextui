import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import UseStatePage from "../routes/use-state";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/use-state",
    element: <UseStatePage />,
  },
]);

export default router;

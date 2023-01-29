import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import UseEffectPage from "../routes/use-effect";
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
  {
    path: "/use-effect",
    element: <UseEffectPage />,
  },
]);

export default router;

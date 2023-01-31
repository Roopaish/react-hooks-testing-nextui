import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import UseEffectPage from "../routes/use-effect";
import UseRefPage from "../routes/use-ref";
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
  {
    path: "/use-ref",
    element: <UseRefPage />,
  },
]);

export default router;

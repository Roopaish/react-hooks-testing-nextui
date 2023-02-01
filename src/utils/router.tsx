import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import UseCallbackPage from "../routes/use-callback";
import UseEffectPage from "../routes/use-effect";
import UseLayoutEffectPage from "../routes/use-layout-effect";
import UseMemoPage from "../routes/use-memo";
import UseReducerPage from "../routes/use-reducer";
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
  {
    path: "/use-layout-effect",
    element: <UseLayoutEffectPage />,
  },
  {
    path: "/use-callback",
    element: <UseCallbackPage />,
  },
  {
    path: "/use-memo",
    element: <UseMemoPage />,
  },
  {
    path: "/use-reducer",
    element: <UseReducerPage />,
  },
]);

export default router;

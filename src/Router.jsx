import './index.css';
import { Navigate, createBrowserRouter } from "react-router-dom";
import Landing from "./assets/views/Landing";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

export default Routes;

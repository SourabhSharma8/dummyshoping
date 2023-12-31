import routes from "./Routes/routes";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(routes);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/layout";
import { loadContacts } from "./pages/loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} loader={loadContacts} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

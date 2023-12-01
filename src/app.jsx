import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout";
import ContactDetailsPage from "./pages/contact-detail";
import HomePage from "./pages/home";
import { loadContacts } from "./pages/loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} loader={loadContacts} />
      <Route
        path="/contacts/:id"
        element={<ContactDetailsPage />}
        loader={loadContacts}
      />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

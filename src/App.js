import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./pages/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}></Route>
    </>
  )
);

function App() {
  return (<RouterProvider router={router} />);
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./Components/Container";
import Body from "./Layout/Body";
import LoginView from "./views/LoginView";
import Roles from "./views/Roles";
import SigninView from "./views/SigninView";
import SignupView from "./views/SignupView";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginView />,
  },
  {
    path: "/roles",
    element: <Roles />,
  },
  {
    path: "/signin",
    element: <SigninView />,
  },
  {
    path: "/signup",
    element: <SignupView />,
  },
  {
    path: "/body",
    element: <Body />,
    children: [
      {
        path: "container",
        element: <Container />,
        children: [],
      },
    ],
  },
]);

function App() {
  return (
    <div className="App font-roboto">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

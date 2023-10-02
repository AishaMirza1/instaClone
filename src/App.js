import { RouterProvider, createBrowserRouter } from "react-router-dom";

import  {AppLayout } from "./components/AppLayout";
import  {Home } from "./pages/Home";
import { Login}  from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import {Explore} from "./pages/Explore"
import { ProfilePage } from "./pages/Profile";
import { Reels } from "./pages/Reels";
function App() {
  const router = createBrowserRouter([
    {
      element:<AppLayout />,
      children : [
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/account/login",
          element:<Login />
        },
        {
          path:"/account/emailsignup",
          element:<SignUp />
        },
        {
          path:"/explore",
          element:<Explore />
        },
        {
          path:"/reels/:reelId",
          element:<Reels />
        },
        {
          path:"/profile/username",
          element:<ProfilePage />
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

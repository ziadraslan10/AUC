import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages//NotFound/NotFound";
//       A1C
import A1C from "./Pages/A1C/A1C";
import Session_1 from "./Pages/A1C/Sessions/Session_1";
import Session_2 from "./Pages/A1C/Sessions/Session_2";
import Session_3 from "./Pages/A1C/Sessions/Session_3";
import Session_4 from "./Pages/A1C/Sessions/Session_4";
import Session_5 from "./Pages/A1C/Sessions/Session_5";
import Session_6 from "./Pages/A1C/Sessions/Session_6";
import Session_7 from "./Pages/A1C/Sessions/Session_7";
import Session_8 from "./Pages/A1C/Sessions/Session_8";
import Session_9 from "./Pages/A1C/Sessions/Session_9";
import Session_10 from "./Pages/A1C/Sessions/Session_10";
import Session_11 from "./Pages/A1C/Sessions/Session_11";

function App() {
  let routing = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        //        A1C
        { path: "A1C", element: <A1C /> },
        { path: "A1C/session1", element: <Session_1 /> },
        { path: "A1C/session2", element: <Session_2 /> },
        { path: "A1C/session3", element: <Session_3 /> },
        { path: "A1C/session4", element: <Session_4 /> },
        { path: "A1C/session5", element: <Session_5 /> },
        { path: "A1C/session6", element: <Session_6 /> },
        { path: "A1C/session7", element: <Session_7 /> },
        { path: "A1C/session8", element: <Session_8 /> },
        { path: "A1C/session9", element: <Session_9 /> },
        { path: "A1C/session10", element: <Session_10 /> },
        { path: "A1C/session11", element: <Session_11 /> },

        //

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routing}></RouterProvider>
    </>
  );
}

export default App;

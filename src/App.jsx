import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppLayout } from "./components/layout/AppLayout";
import { Admissions } from "./pages/Admissions";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Academics } from "./pages/Academics";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        // errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "admissions",
            element: <Admissions />,
          },
          {
            path: "activities",
            element: <Gallery />,
          },
          {
            path: "gallery",
            element: <Gallery />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "academics",
            element: <Academics />,
          },
        ],
      },
    ],
    {
      basename: import.meta.env.BASE_URL,
    }
  );
  return <RouterProvider router={router} />;
}

export default App;

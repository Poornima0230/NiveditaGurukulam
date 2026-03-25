import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import Navbar from "./Header";
import { ScrollToTop } from "../ui/ScrollToTop";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  );
};

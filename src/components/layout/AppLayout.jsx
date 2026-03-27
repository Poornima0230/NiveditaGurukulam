import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import Navbar from "./Header";
import { ScrollToTop } from "../ui/ScrollToTop";
import { PositionReset } from "../ui/PositionReset";

export const AppLayout = () => {
  return (
    <>
      <PositionReset />
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  );
};

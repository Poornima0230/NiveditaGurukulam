import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PositionReset = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

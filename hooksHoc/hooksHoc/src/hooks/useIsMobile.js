import React, { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleScreenSize() {
      setIsMobile(window.screen.width < 550);
    }
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return { isMobile };
};

export default useIsMobile;

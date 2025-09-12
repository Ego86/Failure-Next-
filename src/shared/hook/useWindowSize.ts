import { useEffect, useState } from "react";

const useWindowSize = (): number[] => {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const resizeHandler = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
      };

      // Устанавливаем начальный размер окна
      setWindowSize([window.innerWidth, window.innerHeight]);

      window.addEventListener("resize", resizeHandler);
      return () => window.removeEventListener("resize", resizeHandler);
    }
  }, []);
  return windowSize;
};

export default useWindowSize;

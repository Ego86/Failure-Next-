import { useEffect, useState } from "react";

const useWindowSize = () => {
  // Инициализируем размер окна как [0, 0] для серверного рендеринга
  const [windowSize, setWindowSize] = useState([0, 0]);

  useEffect(() => {
    // Проверяем, что код выполняется только в браузере
    if (typeof window !== "undefined") {
      const resizeHandler = () =>
        setWindowSize([window.innerWidth, window.innerHeight]);

      // Устанавливаем начальный размер окна
      setWindowSize([window.innerWidth, window.innerHeight]);

      window.addEventListener("resize", resizeHandler);
      return () => window.removeEventListener("resize", resizeHandler);
    }
  }, []);

  return windowSize;
};

export default useWindowSize;

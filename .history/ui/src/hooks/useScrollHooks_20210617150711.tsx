import { useState } from "react";
import { useRef, useEffect, useCallback } from "react";

const useScrollHooks = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
    console.log(state.x, state.y);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};

export default useScrollHooks;

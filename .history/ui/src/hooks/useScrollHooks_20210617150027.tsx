import { useState } from "react";
import { useRef, useEffect, useCallback } from "react";

const useScrollHooks = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = useCallback(([entry]) => {}, [
    end,
    start,
    stepTime,
    element,
  ]);

  const onScroll = (event) => {
    setState({ y: window.scrollY, x: window.screenX });
    console.log(state.x, state.y);
  };
};

export default useScrollHooks;

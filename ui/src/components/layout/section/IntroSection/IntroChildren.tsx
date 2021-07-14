import React, { useRef, useState, useEffect } from "react";
import Tada from "react-reveal/Tada";
import IntroCardView from "./IntroCardView/IntroCardView";

import { useGetScroll, UseScrollHooksProps } from "../../../../Hooks";

const IntroChildren: React.FC<{}> = () => {
  const node = useRef<HTMLDivElement>(null);

  const [count, setCount] = useState<number>(0);

  const useScrollHooksProps: UseScrollHooksProps = {
    receivedRef: node,
  };

  const result = useGetScroll(useScrollHooksProps);

  useInterval(
    () => {
      setCount(count + 1);
    },
    result.isShow ? 2000 : null
  );

  return (
    <div className="flex flex-col">
      <div ref={node} className="w-full flex justify-center transform rotate-6">
        <Tada spy={count} delay={300} css={{ top: "100px" }}>
          <span className="text-3xl mt-10">뭔가 있어보이는 제목</span>
        </Tada>
      </div>

      <IntroCardView />
    </div>
  );
};

function useInterval(callback, delay) {
  const savedCallBack = useRef<any>();

  useEffect(() => {
    savedCallBack.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallBack.current == undefined) {
        return;
      } else {
        savedCallBack.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default IntroChildren;

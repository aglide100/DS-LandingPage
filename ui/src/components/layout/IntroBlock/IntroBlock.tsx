import React, { useRef, useState, useEffect } from "react";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";
import { useScrollHooks } from "../../../Hooks";
import { UseScrollHooksProps } from "../../../Hooks/useScrollHooks";

const IntroBlock: React.FC = () => {
  const node = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(0);

  const useScrollHooksProps: UseScrollHooksProps = {
    receivedRef: node,
  };

  const result = useScrollHooks(useScrollHooksProps);

  useInterval(
    () => {
      setCount(count + 1);
    },
    result.isShow ? 5000 : null
  );

  return (
    <div
      ref={node}
      className="w-full flex flex-col align-middle justify-center mb-48"
    >
      <div className="w-full flex justify-center transform rotate-6">
        <Tada spy={count} delay={300}>
          <span className="text-3xl mt-10">뭔가 있어보이는 제목</span>
        </Tada>
      </div>
      <div className="w-full flex justify-center">
        <Fade bottom delay={700}>
          <div></div>
        </Fade>
      </div>
    </div>
  );
};

function useInterval(callback, delay) {
  const savedCallBack = useRef();

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

export default IntroBlock;

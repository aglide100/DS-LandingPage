import React, { useRef, useState, useEffect } from "react";
import Tada from "react-reveal/Tada";

import { useGetScroll, UseScrollHooksProps } from "../../../Hooks";

export const IntroSection: React.FC = () => {
  const node = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  if (result.scrollY < screen.height) {
    videoRef.current?.play();
  } else {
    videoRef.current?.pause();
  }

  return (
    <div className="w-screen z-20">
      <div className="flex flex-col min-h-screen">
        <video
          autoPlay={true}
          muted
          className="fixed top-0 w-screen opacity-95 overflow-hidden"
          style={{ zIndex: -1 }}
          ref={videoRef}
        >
          <source
            src={require("../../../../public/intro.mp4")}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="z-10  bg-yellow-400 w-screen h-screen h-32 ">
        <div
          ref={node}
          className="w-full flex justify-center transform rotate-6"
        >
          <Tada spy={count} delay={300} css={{ top: "100px" }}>
            <span className="text-3xl mt-10">뭔가 있어보이는 제목</span>
          </Tada>
        </div>
      </div>
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
export default IntroSection;

import React, { useCallback, useEffect, useRef, useState } from "react";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";

const IntroBlock: React.FC = () => {
  const node = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState<boolean>(true);

  const callbackFunction = useCallback(([entry]) => {
    const { current } = node;
    if (entry.isIntersecting) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, []);

  const options = {
    root: null,
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (node.current) observer.observe(node.current);

    return () => {
      if (node.current) observer.unobserve(node.current);
    };
  }, [node, options]);

  return (
    <div
      ref={node}
      className="w-full flex flex-col align-middle justify-center mb-48"
    >
      <div className="w-full flex justify-center transform rotate-6">
        <Tada spy={isShow} delay={300}>
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

export default IntroBlock;

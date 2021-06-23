import React from "react";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";

const IntroBlock: React.FC = () => {
  return (
    <div className="w-full flex flex-col align-middle justify-center mb-48 ">
      <div className="w-full flex justify-center transform rotate-6">
        <Tada delay={500}>
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

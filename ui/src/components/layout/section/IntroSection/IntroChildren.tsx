import React from "react";
import IntroCardView from "./IntroCardView/IntroCardView";
import ParallaxBox from "../../../ParallaxBox/ParallaxBox";

const IntroChildren: React.FC<{}> = () => {
  return (
    <ParallaxBox>
      <div className="flex flex-col">
        <IntroCardView />
      </div>
    </ParallaxBox>
  );
};

export default IntroChildren;

import React from "react";
import CardContainer from "../../CardContainer/CardContainer";
import CardContainer2 from "../../CardContainer/CardContainer2";
import { cardViewContainerProps } from "../../CardContainer/CardContainerProps";
import { Frame } from "framer";

const InterViewSection: React.FC<{}> = () => {
  return (
    <div>
      <div className="pb-40" />
      <div className="flex flex-col justify-items-start">
        <Frame
          initial={{ rotate: 45 }}
          whileHover={{ rotate: 315 }}
          transition={{ duration: 1 }}
          size={75}
          background={"#d1112c"}
        />
        <div className="mt-36 text-6xl text-white mb-20">
          미래를 창조하는 소프트웨어 융합
        </div>
      </div>
      <CardContainer cardViewList={cardViewContainerProps} />
      <div className="mb-96"></div>
      <div className="mb-96"></div>
      <CardContainer2 cardViewList={cardViewContainerProps} />{" "}
    </div>
  );
};

export default InterViewSection;

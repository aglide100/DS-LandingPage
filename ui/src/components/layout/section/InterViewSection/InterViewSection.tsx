import React from "react";

import LoadingComponent from "../../../Loading/Loading";
import LoadingError from "../../../LoadingError/LoadingError";
import dynamic from "next/dynamic";
import { cardViewContainerProps } from "../../CardContainer/CardContainerProps";

const CardViewContainer = dynamic(
  () =>
    import("../../CardContainer/CardContainer").catch((err) => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  {
    loading: () => <LoadingComponent />,
    ssr: false,
  }
);

const CardViewContainer2 = dynamic(
  () =>
    import("../../CardContainer/CardContainer2").catch((err) => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  {
    loading: () => <LoadingComponent />,
    ssr: false,
  }
);

const InterViewSection: React.FC<{}> = () => {
  return (
    <div>
      <div className="text-6xl text-white">미래를 창조하는 소프트웨어 융합</div>
      <CardViewContainer cardViewList={cardViewContainerProps} />
      <div className="mb-96"></div>
      <div className="mb-96"></div>
      <CardViewContainer2 cardViewList={cardViewContainerProps} />{" "}
    </div>
  );
};

export default InterViewSection;

import React from "react";
import { cardViewContainerProps } from "../../CardContainer/CardContainerProps";
import dynamic from "next/dynamic";
import LoadingComponent from "../../../Loading/Loading";
import LoadingError from "../../../LoadingError/LoadingError";
import { motion } from "framer-motion";

const CardContainer = dynamic(
  () =>
    import("../../CardContainer/CardContainer").catch((err) => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  {
    loading: () => <LoadingComponent />,
    ssr: false,
  }
);

const CardContainer2 = dynamic(
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
      <div className="pb-40" />
      <div className="flex flex-col justify-items-start">
        <motion.div
          className="w-24 h-24"
          initial={{ rotate: 45 }}
          whileHover={{ rotate: 315 }}
          transition={{ duration: 1 }}
          style={{ background: "#d1112c" }}
        />
        <div className="mt-36 text-6xl text-white mb-20">
          미래를 창조하는 소프트웨어 융합
        </div>
      </div>
      <CardContainer cardViewList={cardViewContainerProps} />
      <div className="mb-96"></div>
      <div className="mb-96"></div>
      <CardContainer2 cardViewList={cardViewContainerProps} />
    </div>
  );
};

export default InterViewSection;

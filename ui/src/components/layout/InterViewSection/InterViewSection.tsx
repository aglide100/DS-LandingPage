import React, { useRef } from "react";
import { cardViewContainerProps } from "./CardContainer/CardContainerItems";
import dynamic from "next/dynamic";
import LoadingComponent from "../../atom/Loading/Loading";
import LoadingError from "../../atom/LoadingError/LoadingError";
import { motion } from "framer-motion";

const CardContainer = dynamic(
  () =>
    import("./CardContainer/CardContainer").catch((err) => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  {
    loading: () => <LoadingComponent />,
    ssr: false,
  }
);

// const CardContainer2 = dynamic(
//   () =>
//     import("./CardContainer/CardContainer2").catch((err) => {
//       return () => <LoadingError>{err}</LoadingError>;
//     }),
//   {
//     loading: () => <LoadingComponent />,
//     ssr: false,
//   }
// );

const InterViewSection: React.FC<{}> = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="mt-40" ref={constraintsRef}>
      <div className="ml-48 flex flex-col justify-center">
        <motion.div
          className="w-12 h-12"
          initial={{ rotate: 45 }}
          drag={true}
          dragConstraints={constraintsRef}
          whileHover={{ rotate: 315 }}
          transition={{ duration: 1 }}
          style={{ background: "#d1112c" }}
        />
        <div className="mt-10 text-6xl text-white mb-20">
          미래를 창조하는 소프트웨어
        </div>
      </div>
      <CardContainer cardViewList={cardViewContainerProps} />
      <div className="mb-96" />
      {/* <div className="mb-96"></div>
      <CardContainer2 cardViewList={cardViewContainerProps} /> */}
    </div>
  );
};

export default InterViewSection;

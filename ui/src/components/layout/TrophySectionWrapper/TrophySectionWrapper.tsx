import React, { ReactNode } from "react";

export type TrophySectionWrapperProps = {
  children: ReactNode;
};

const TrophySectionWrapper: React.FC<TrophySectionWrapperProps> = (props) => {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        backgroundSize: "80px 80px",
        backgroundImage:
          "linear-gradient(#545454 1px, transparent 1px), linear-gradient(to right, #545454 1px, #ffffff 1px)",
      }}
    >
      {props.children}
    </div>
  );
};

export default TrophySectionWrapper;

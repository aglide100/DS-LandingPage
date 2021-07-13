import React, { ReactNode } from "react";

export type InterViewSectionWrapperProps = {
  children: ReactNode;
};

const InterViewSectionWrapper: React.FC<InterViewSectionWrapperProps> = (
  props
) => {
  return (
    <div
      className="w-full min-h-screen pl-48 pr-48 relative"
      style={{
        background: `repeating-linear-gradient(135deg, #404040, #404040 2px, #1f1f1f 1px, #1f1f1f 8px)`,
      }}
    >
      <div className="absolute top-0 right-0  flex flex-col">
        <div
          style={{ color: "#545454" }}
          className="text-bg cursor-default mix-blend-overlay "
        >
          Compute
        </div>
        <div
          style={{ color: "#545454" }}
          className="text-bg cursor-default mix-blend-overlay "
        >
          Converge
        </div>
        <div
          style={{ color: "#545454" }}
          className="text-bg cursor-default mix-blend-overlay "
        >
          Create
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default InterViewSectionWrapper;

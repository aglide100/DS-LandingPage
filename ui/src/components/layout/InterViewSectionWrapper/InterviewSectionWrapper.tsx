import React, { ReactNode } from "react";

export type InterViewSectionWrapperProps = {
  children: ReactNode;
};

const InterViewSectionWrapper: React.FC<InterViewSectionWrapperProps> = (
  props
) => {
  return (
    <div
      className="w-full min-h-screen relative overflow-x-hidden cursor-default select-none"
      style={{
        background: `repeating-linear-gradient(135deg, #404040, #404040 1px, #1f1f1f 2px, #1f1f1f 12px)`,
      }}
    >
      <div className="absolute top-0 right-0 flex flex-col">
        <div className="text-bg text-ds_gray-1 cursor-default opacity-25 ">
          Compute
        </div>
        <div className="relative left-1/4 text-bg text-ds_gray-1 cursor-default opacity-25 ">
          Converge
        </div>
        <div className="text-bg text-ds_gray-1 cursor-default opacity-25 ">
          Create
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default InterViewSectionWrapper;

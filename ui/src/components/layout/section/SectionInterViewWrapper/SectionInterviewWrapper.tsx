import React, { ReactNode } from "react";

export type SectionInterViewWrapperProps = {
  children: ReactNode;
};

const SectionInterViewWrapper: React.FC<SectionInterViewWrapperProps> = (
  props
) => {
  return (
    <div
      className="w-full min-h-screen pl-48 pr-48"
      style={{
        background: `repeating-linear-gradient(135deg, #404040, #404040 2px, #1f1f1f 1px, #1f1f1f 8px)`,
      }}
    >
      compute converge create
      {props.children}
    </div>
  );
};

export default SectionInterViewWrapper;

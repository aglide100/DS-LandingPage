import React, { ReactNode } from "react";

export type SectionFirstProps = {
  children: ReactNode;
};

const SectionFirst: React.FC<SectionFirstProps> = ({ children }) => {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        background: `repeating-linear-gradient(135deg, #404040, #404040 2px, #1f1f1f 1px, #1f1f1f 8px)`,
      }}
    >
      {children}
    </div>
  );
};

export default SectionFirst;

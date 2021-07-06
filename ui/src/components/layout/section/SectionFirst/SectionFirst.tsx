import React from "react";

export function SectionFirst() {
  return (
    <div
      className="w-screen h-screen"
      style={{
        background: `repeating-linear-gradient(135deg, #404040, #404040 2px, #1f1f1f 0, #1f1f1f 10px)`,
      }}
    >
      <p>section content</p>
    </div>
  );
}

export default SectionFirst;

import React from "react";

export const IntroSection: React.FC = () => {
  return (
    <div className="w-screen z-20">
      <div className="flex flex-col min-h-screen">
        <video
          autoPlay
          muted
          className="fixed top-0 w-screen h-screen opacity-95 overflow-hidden"
          style={{ zIndex: -1 }}
        >
          <source
            src={require("../../../../public/intro.mp4")}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="z-10  bg-yellow-400 w-screen h-screen h-32 "></div>
    </div>
  );
};
export default IntroSection;

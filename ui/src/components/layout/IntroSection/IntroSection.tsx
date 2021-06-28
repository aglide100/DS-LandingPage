import React from "react";
import Image from "next/image";

export const IntroSection: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col w-full h-96 bg-fixed ">
        <Image
          width="100%"
          height="100%"
          src="/cat1.jpeg"
          className="z-0 "
          alt="background!!"
        ></Image>
      </div>

      <div className="z-10 bg-yellow-400 h-32"></div>
    </div>
  );
};
export default IntroSection;

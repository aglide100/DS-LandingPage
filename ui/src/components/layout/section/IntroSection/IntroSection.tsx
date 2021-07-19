import React, { useRef, ReactNode, useState } from "react";
import { useIsShow, UseScrollHooksProps } from "../../../../Hooks";
import Image from "next/image";

export type IntroSectionProps = {
  children: ReactNode;
};

export const IntroSection: React.FC<IntroSectionProps> = ({ children }) => {
  const [isVideoPlay, setIsVideoPlay] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const introNode = useRef<HTMLDivElement>(null);

  const useScrollHooksProps: UseScrollHooksProps = {
    receivedRef: introNode,
  };

  const isShow = useIsShow(useScrollHooksProps);

  if (isShow.isShow == true || undefined) {
    const playPromise = videoRef.current?.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          videoRef.current?.play();
          setIsVideoPlay(false);
        })
        .catch((error) => {
          console.log("Can't play intro!!", error);
        });
    }
  } else if (isShow.isShow == false && !isVideoPlay) {
    setIsVideoPlay(true);
    videoRef.current?.pause();
  }

  return (
    <div className="w-full z-20">
      <div className="flex flex-col h-screen" ref={introNode}>
        <video
          autoPlay={true}
          muted
          className="fixed top-0 w-full h-screen object-cover sm:h-auto md:h-screen opacity-95 overflow-hidden"
          style={{ zIndex: -1 }}
          ref={videoRef}
        >
          <source
            src={require("../../../../../public/intro.mp4")}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10 from-gray-200 bg-gradient-to-t to-white w-full h-screen flex flex-col items-center justify-around">
        <div className="w-full h-full z-20">{children}</div>
        <div className="absolute">
          <Image src="/intro_15_img07.png" width="400" height="400" alt="" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

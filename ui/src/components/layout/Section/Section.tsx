import React from "react";
import Zoom from "react-reveal/Zoom";

export type SectionProps = {
  article: string;
  id: string;
};

export const Section = (props: SectionProps) => {
  //   const testHook = useScrollHooks();

  return (
    <div className="w-screen bg-black z-20">
      <Zoom>
        <div>{props.article}</div>
      </Zoom>
    </div>
  );
};

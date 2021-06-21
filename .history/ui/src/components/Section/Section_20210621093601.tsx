import React from "react";
import { useScrollHooks } from "../../Hooks";

export type SectionProps = {
  article: string;
};

export const Section = (props: SectionProps) => {
  const testHook = useScrollHooks();

  return <>{props.article}</>;
};

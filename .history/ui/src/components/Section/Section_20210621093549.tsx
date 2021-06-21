import React from "react";
import { useScrollHooks } from "../src/Hooks";

export type SectionProps = {
  article: string;
};

export const Section = (props: SectionProps) => {
  const testHook = useScrollHooks();

  return <>{props.article}</>;
};

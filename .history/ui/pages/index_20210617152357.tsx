import React from "react";
import { useScrollHooks } from "../src/Hooks";
import { Section } from "../src/components/Section/Section";
import { SectionArticle1 } from "../src/components/Section/Section.stories";

export default function Home() {
  const testHook = useScrollHooks();
  const sectionProps = { SectionArticle1 };

  return (
    <div>
      <div className="h-40"></div>
      <Section {...sectionProps}></Section>
    </div>
  );
}

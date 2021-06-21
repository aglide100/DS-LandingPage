import React from "react";
import { useScrollHooks } from "../src/Hooks";
import { Section, SectionProps } from "../src/components/Section/Section";
import { SectionArticle1 } from "../src/components/Section/Section.stories";

export default function Home() {
  const testHook = useScrollHooks();
  const sectionArticle = SectionArticle1.args?.article?.toString()!;

  return (
    <div>
      <Section article={sectionArticle}></Section>
      <br />
      <Section article={sectionArticle}></Section>
      <br />
      <Section article={sectionArticle}></Section>
      <br />
      <Section article={sectionArticle}></Section>
      <br />
      <Section article={sectionArticle}></Section>
    </div>
  );
}

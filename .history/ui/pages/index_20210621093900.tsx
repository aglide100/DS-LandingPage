import React from "react";
import { Section, SectionProps } from "../src/components/Section/Section";
import { SectionArticle1 } from "../src/components/Section/Section.stories";

export default function Home() {
  const sectionArticle = SectionArticle1.args?.article?.toString()!;

  return (
    <div>
      <Section article={sectionArticle} id={"article1"}></Section>
      <br />
      <Section article={sectionArticle} id={"article2"}></Section>
      <br />
      <Section article={sectionArticle} id={"article3"}></Section>
      <br />
      <Section article={sectionArticle} id={"article4"}></Section>
      <br />
      <Section article={sectionArticle} id={"article5"}></Section>
    </div>
  );
}

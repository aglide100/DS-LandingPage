import React from "react";
import BounceSection, { BounceSectionProps } from "./BounceSection";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Section/Section",
  component: BounceSection,
} as Meta;

const Template: Story<BounceSectionProps> = (args) => (
  <BounceSection {...args} />
);

export const SectionArticle1 = Template.bind({});
SectionArticle1.args = {};

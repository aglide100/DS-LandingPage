import React from "react";
import ZoomSection, { ZoomSectionProps } from "./ZoomSection";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Section/Section",
  component: ZoomSection,
} as Meta;

const Template: Story<ZoomSectionProps> = (args) => <ZoomSection {...args} />;

export const SectionArticle1 = Template.bind({});
SectionArticle1.args = {};

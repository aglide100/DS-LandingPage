import React from "react";
import { Meta, Story } from "@storybook/react";
import { IntroSection, IntroSectionProps } from "./IntroSection";
import IntroCardView from "./IntroCardView/IntroCardView";

export default {
  title: "Layout/Intro",
  component: IntroSection,
} as Meta;

const Template: Story<IntroSectionProps> = (args) => <IntroSection {...args} />;

export const IntroSectionStory = Template.bind({});
IntroSectionStory.args = {
  children: (
    <>
      <IntroCardView />
    </>
  ),
};

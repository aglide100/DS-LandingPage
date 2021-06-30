import React from "react";
import { Meta, Story } from "@storybook/react";
import { IntroSection } from "./IntroSection";

export default {
  title: "Section/Intro",
  component: IntroSection,
} as Meta;

const Template: Story<{}> = (args) => <IntroSection {...args} />;

export const IntroSectionStory = Template.bind({});
IntroSectionStory.args = {};

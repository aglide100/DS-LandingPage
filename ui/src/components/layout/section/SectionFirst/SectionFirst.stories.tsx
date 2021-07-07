import React from "react";
import { Meta, Story } from "@storybook/react";
import SectionFirst, { SectionFirstProps } from "./SectionFirst";

export default {
  title: "Section/First",
  component: SectionFirst,
} as Meta;

const Template: Story<SectionFirstProps> = (args) => <SectionFirst {...args} />;

export const SectionFirstStory = Template.bind({});
SectionFirstStory.args = {
  children: <div className="w-screen h-screen">Hello</div>,
};

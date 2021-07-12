import React from "react";
import { Meta, Story } from "@storybook/react";
import InterViewSectionWrapper, {
  InterViewSectionWrapperProps,
} from "./InterviewSectionWrapper";

export default {
  title: "Section/First",
  component: InterViewSectionWrapper,
} as Meta;

const Template: Story<InterViewSectionWrapperProps> = (args) => (
  <InterViewSectionWrapper {...args} />
);

export const InterViewSectionWrapperStory = Template.bind({});
InterViewSectionWrapperStory.args = {
  children: <div className="w-screen h-screen">Hello</div>,
};

import React from "react";
import { Meta, Story } from "@storybook/react";
import SectionInterViewWrapper, {
  SectionInterViewWrapperProps,
} from "./SectionInterverWrapper";

export default {
  title: "Section/First",
  component: SectionInterViewWrapper,
} as Meta;

const Template: Story<SectionInterViewWrapperProps> = (args) => (
  <SectionInterViewWrapper {...args} />
);

export const SectionInterViewWrapperStory = Template.bind({});
SectionInterViewWrapperStory.args = {
  children: <div className="w-screen h-screen">Hello</div>,
};

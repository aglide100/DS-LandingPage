import React from "react";
import { Meta, Story } from "@storybook/react";
import TrophySectionWrapper, {
  TrophySectionWrapperProps,
} from "./TrophySectionWrapper";

export default {
  title: "Section/Trophy",
  component: TrophySectionWrapper,
} as Meta;

const Template: Story<TrophySectionWrapperProps> = (args) => (
  <TrophySectionWrapper {...args} />
);

export const TrophySectionWrapperStory = Template.bind({});
TrophySectionWrapperStory.args = {
  children: <></>,
};

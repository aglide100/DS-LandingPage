import React from "react";
import { Meta, Story } from "@storybook/react";
import { SectionFirst } from "./SectionFirst";

export default {
  title: "Section/First",
  component: SectionFirst,
} as Meta;

const Template: Story<{}> = (args) => <SectionFirst {...args} />;

export const SectionFirstStory = Template.bind({});
SectionFirstStory.args = {};

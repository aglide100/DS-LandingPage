import React from "react";
import { Meta, Story } from "@storybook/react";
import IntroduceDepartment from "./IntroduceDepartment";

export default {
  title: "Section/First",
  component: IntroduceDepartment,
} as Meta;

const Template: Story<{}> = (args) => <IntroduceDepartment {...args} />;

export const IntroduceDepartmentStory = Template.bind({});
IntroduceDepartmentStory.args = {};

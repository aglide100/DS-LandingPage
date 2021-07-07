import React from "react";
import Icon, { IconProps } from "./Icon";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Logo = Template.bind({});
Logo.args = {
  which: "Logo",
};

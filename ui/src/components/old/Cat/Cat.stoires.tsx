import React from "react";
import Cat, { CatProps } from "./Cat";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Cat",
  component: Cat,
} as Meta;

const Template: Story<CatProps> = (args) => <Cat {...args} />;

export const CatFirst = Template.bind({});
CatFirst.args = {
  isFirst: true,
  isSecond: false,
  isThird: false,
};

export const CatSecond = Template.bind({});
CatSecond.args = {
  isFirst: false,
  isSecond: true,
  isThird: false,
};
export const CatThird = Template.bind({});
CatThird.args = {
  isFirst: false,
  isSecond: false,
  isThird: true,
};

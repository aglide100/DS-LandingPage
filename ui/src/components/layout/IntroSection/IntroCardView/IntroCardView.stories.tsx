import React from "react";
import IntroCardView from "./IntroCardView";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Intro/IntroCardView",
  component: IntroCardView,
} as Meta;

const Template: Story<{}> = (args) => <IntroCardView {...args} />;

export const IntroCardViewInfo = Template.bind({});
IntroCardViewInfo.args = {};

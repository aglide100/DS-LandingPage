import React from "react";
import TrophySection from "./TrophySection";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Section/TrophyContent",
  component: TrophySection
} as Meta;

const Template: Story<{}> = args => <TrophySection {...args} />;

export const TrophySectionContent = Template.bind({});
TrophySectionContent.args = {};

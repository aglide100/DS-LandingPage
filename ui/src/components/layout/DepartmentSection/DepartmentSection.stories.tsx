import React from "react";
import { Meta, Story } from "@storybook/react";
import DepartmentSection from "./DepartmentSection";

export default {
  title: "Section/First",
  component: DepartmentSection,
} as Meta;

const Template: Story<{}> = (args) => <DepartmentSection {...args} />;

export const DepartmentSectionStory = Template.bind({});
DepartmentSectionStory.args = {};

import React from "react";
import { Section, Section, SectionProps } from "./Section";
import { Meta, Story } from "@storybook/react";

export default {
    title: "Section/Section"
    component: Section,
} as Meta;

const Template: Story<SectionProps> = (args) => <Section {...args} />;

export const SectionArticle1 = Template.bind({});
SectionArticle1.args = {};



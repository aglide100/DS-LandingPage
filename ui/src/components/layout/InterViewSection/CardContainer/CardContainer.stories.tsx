import React from "react";
import CardContainer, { CardContainerProps } from "./CardContainer";
import { Meta, Story } from "@storybook/react";

import { cardViewContainerProps } from "./CardContainerProps";

export default {
  title: "Layout/InterView/Card",
  component: CardContainer,
} as Meta;

const Template: Story<CardContainerProps> = (args) => (
  <CardContainer {...args} />
);

export const CardContainerFirst = Template.bind({});
CardContainerFirst.args = {
  cardViewList: cardViewContainerProps,
};

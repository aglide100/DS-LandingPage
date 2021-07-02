import React from "react";
import CardContainer, {
  CardContainerItemProps,
  CardContainerProps,
} from "./CardContainer";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Card",
  component: CardContainer,
} as Meta;

const cardViewProps1: CardContainerItemProps = {
  isYoutube: true,
  videoID: "DGTSRSSsWJs",
};
const cardViewProps2: CardContainerItemProps = {
  isYoutube: true,
  videoID: "jvbgDfCUGE0",
};
const cardViewProps3: CardContainerItemProps = {
  isYoutube: true,
  videoID: "wnhvanMdx4s",
};
const cardViewProps4: CardContainerItemProps = {
  isYoutube: true,
  videoID: "wijVtkmjP-o",
};
const cardViewProps5: CardContainerItemProps = {
  isYoutube: true,
  videoID: "HMnatoiMdjA",
};

const Template: Story<CardContainerProps> = (args) => (
  <CardContainer {...args} />
);

export const CardContainerFirst = Template.bind({});
CardContainerFirst.args = {
  cardViewList: [
    cardViewProps1,
    cardViewProps2,
    cardViewProps3,
    cardViewProps4,
    cardViewProps5,
  ],
};

import { motion, AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import CardView, { CardViewProps } from "./CardView/CardViewForMobile";
import CardData from "../CardData";

export type CardContainerProps = {
  cardViewList: CardData[];
};
const CardContainer: React.FC<CardContainerProps> = ({ cardViewList }) => {
  const onSelect = (selectedVideoID: string) => {
    const list = cardViewListItem.map(cardView => {
      if (cardView.videoID == selectedVideoID) {
        cardView.isOpen = !cardView.isOpen;
        cardView.order = cardViewListItem.length;
      } else {
        cardView.isOpen = false;
        if (cardView.order != 0) {
          cardView.order--;
        }
      }
      return cardView;
    });

    setCardViewListItem(list);
  };

  const initCardViewList: CardViewProps[] = cardViewList.map(
    (cardView, index) => {
      return {
        isOpen: false,
        onSelect: onSelect,
        videoID: cardView.videoID,
        isYoutube: cardView.isYoutube,
        order: index
      };
    }
  );

  const [cardViewListItem, setCardViewListItem] = useState<CardViewProps[]>(
    initCardViewList
  );

  const cardViewListItems = cardViewListItem.map(cardView => {
    return (
      <CardView
        key={cardView.videoID}
        videoID={cardView.videoID}
        isYoutube={cardView.isYoutube}
        isOpen={cardView.isOpen}
        order={cardView.order}
        onSelect={onSelect}
      />
    );
  });

  return (
    <AnimateSharedLayout>
      <motion.ul
        layout
        initial={{ borderRadius: 25 }}
        className="flex flex-row flex-nowrap justify-around"
      >
        {cardViewListItems}
      </motion.ul>
    </AnimateSharedLayout>
  );
};

export default CardContainer;

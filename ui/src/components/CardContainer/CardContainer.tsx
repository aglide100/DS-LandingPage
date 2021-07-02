import { motion, AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import CardView, { CardViewProps } from "./CardView";

export type CardContainerProps = {
  cardViewList: CardContainerItemProps[];
};

export type CardContainerItemProps = {
  videoID: string;
  isYoutube: boolean;
};

const CardContainer: React.FC<CardContainerProps> = ({ cardViewList }) => {
  const onSelect = (selectedVideoID: string) => {
    console.log(selectedVideoID + "클릭됨");

    const list = cardViewListItem.map((cardView) => {
      if (cardView.videoID == selectedVideoID) {
        cardView.isOpen = !cardView.isOpen;
      } else {
        cardView.isOpen = false;
      }
      return cardView;
    });

    setCardViewListItem(list);
  };
  const initCardViewList: CardViewProps[] = cardViewList.map((cardView) => {
    return {
      isOpen: false,
      onSelect: onSelect,
      videoID: cardView.videoID,
      isYoutube: cardView.isYoutube,
    };
  });

  const [cardViewListItem, setCardViewListItem] = useState<CardViewProps[]>(
    initCardViewList
  );

  const cardViewListItems = cardViewListItem.map((cardView) => {
    return (
      <CardView
        key={cardView.videoID}
        videoID={cardView.videoID}
        isYoutube={cardView.isYoutube}
        isOpen={cardView.isOpen}
        onSelect={onSelect}
      />
    );
  });

  return (
    <AnimateSharedLayout>
      <motion.ul
        layout
        initial={{ borderRadius: 25 }}
        className="flex flex-row flex-wrap justify-around"
      >
        {cardViewListItems}
      </motion.ul>
    </AnimateSharedLayout>
  );
};

export default CardContainer;

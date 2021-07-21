import { motion, AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import CardView2, { CardView2Props } from "./CardViewForMobile";

export type CardContainerProps = {
  cardViewList: CardContainerItemProps[];
};

export type CardContainerItemProps = {
  videoID: string;
  isYoutube: boolean;
};

const CardContainer: React.FC<CardContainerProps> = ({ cardViewList }) => {
  const onSelect = (selectedVideoID: string) => {
    const list = cardViewListItem.map((cardView) => {
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

  const initCardViewList: CardView2Props[] = cardViewList.map(
    (cardView, index) => {
      return {
        isOpen: false,
        onSelect: onSelect,
        videoID: cardView.videoID,
        isYoutube: cardView.isYoutube,
        order: index,
      };
    }
  );

  const [cardViewListItem, setCardViewListItem] = useState<CardView2Props[]>(
    initCardViewList
  );

  const cardViewListItems = cardViewListItem.map((cardView) => {
    return (
      <CardView2
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

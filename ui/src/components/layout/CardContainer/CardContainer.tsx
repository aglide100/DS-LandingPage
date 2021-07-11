import { motion } from "framer-motion";
import React, { useState } from "react";
import CardView, { CardViewProps } from "./CardView";
import classNames from "classnames";

export type CardContainerProps = {
  cardViewList: CardContainerItemProps[];
};

export type CardContainerItemProps = {
  videoID: string;
  isYoutube: boolean;
};

const CardContainer: React.FC<CardContainerProps> = ({ cardViewList }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

    setIsOpen(!isOpen);
    setCardViewListItem(list);
  };

  const initCardViewList: CardViewProps[] = cardViewList.map(
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
        order={cardView.order}
        onSelect={onSelect}
      />
    );
  });

  return (
    <motion.ul
      layout
      initial={{ borderRadius: 25 }}
      className={classNames("flex flex-row flex-wrap justify-around", {
        "w-screen left-40": isOpen,
      })}
    >
      {cardViewListItems}
    </motion.ul>
  );
};

export default CardContainer;

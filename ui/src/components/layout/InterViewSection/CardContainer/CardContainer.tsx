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

  const onSelect = (selectedVideoID: string, order: number) => {
    const offsetOrder = (cardViewListItem.length - 1) / 2;
    const list = cardViewListItem.map((cardView) => {
      if (cardView.videoID == selectedVideoID) {
        cardView.isOpen = !cardView.isOpen;
        cardView.order = offsetOrder;
      } else {
        cardView.isOpen = false;
        if (
          cardView.order == 0 ||
          cardView.order == cardViewListItem.length - 1
        ) {
          // ok
        } else if (cardView.order > offsetOrder) {
          cardView.order++;
        } else if (cardView.order < offsetOrder) {
          cardView.order--;
        } else if (cardView.order == offsetOrder) {
          if (order > offsetOrder) {
            cardView.order++;
          } else {
            cardView.order--;
          }
        }
      }
      return cardView;
    });

    setIsOpen(!isOpen);
    setCardViewListItem(list);
  };

  const onHover = () => {
    const list = cardViewListItem.map((cardView) => {
      cardView.isFirst = false;
      return cardView;
    });

    setCardViewListItem(list);
  };

  const initCardViewList: CardViewProps[] = cardViewList.map(
    (cardView, index) => {
      return {
        isOpen: false,
        onSelect: onSelect,
        onHover: onHover,
        isFirst: true,
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
        isOpen={cardView.isOpen}
        order={cardView.order}
        isFirst={cardView.isFirst}
        onSelect={onSelect}
        onHover={onHover}
      />
    );
  });

  return (
    <motion.ul
      className={classNames(
        "flex flex-row flex-nowrap justify-around px-48 hover:px-0",
        {
          "w-screen left-40": isOpen,
        }
      )}
    >
      {cardViewListItems}
    </motion.ul>
  );
};

export default CardContainer;

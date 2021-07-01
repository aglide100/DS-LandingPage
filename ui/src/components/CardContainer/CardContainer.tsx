import React, { ReactNode, useState } from "react";
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
        cardView.isOpen = true;
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
      <li key={cardView.videoID}>
        <CardView
          videoID={cardView.videoID}
          isYoutube={cardView.isYoutube}
          isOpen={cardView.isOpen}
          onSelect={onSelect}
        />
      </li>
    );
  });

  return (
    <div className="w-full border rounded-xl border-solid flex flex-col">
      <ul className="flex flex-row">{cardViewListItems}</ul>
    </div>
  );
};

export default CardContainer;

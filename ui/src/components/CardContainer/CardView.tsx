import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import ReactPlayer from "react-player";

export type CardViewProps = {
  videoID: string;
  isYoutube: boolean;
  isOpen: boolean;
  onSelect: (videoID: string) => void;
};

const CardView: React.FC<CardViewProps> = ({
  videoID,
  isYoutube,
  isOpen,
  onSelect,
}) => {
  return (
    <div
      className="w-full border rounded-xl border-solid flex flex-col"
      style={{
        backgroundImage:
          "https://img.youtube.com/vi/" + videoID + "/sddefault.jpg",
      }}
      onClick={(ev) => {
        ev.preventDefault();
        onSelect(videoID);
      }}
    >
      <div>
        <img src={"https://img.youtube.com/vi/" + videoID + "/sddefault.jpg"} />
        <div>썸네일</div>
        <div>
          {isOpen ? <Content videoID={videoID} isYoutube={isYoutube} /> : "..."}
        </div>
      </div>
    </div>
  );
};

type ContentProps = {
  videoID: string;
  isYoutube: boolean;
};

const Content: React.FC<ContentProps> = ({ videoID }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {videoID}
      <div className="w-full">
        <ReactPlayer url={"https://youtube.com/watch?v=" + videoID} playing />
      </div>
    </motion.div>
  );
};

export default CardView;
